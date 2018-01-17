import * as httpRequest from '../../../util/HttpRequest'
import { base_host } from '../../../config/Host'
import * as loginActionTypes from './LoginActionTypes'
import { ObjectToUrl } from '../../../util/ObjectToUrl'
import { getFormValues } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import { ToastAndroid } from 'react-native'
import requestHeaders from '../../../util/RequestHeaders'
import localStorageKey from '../../../util/LocalStorageKey'
import localStorage from '../../../util/LocalStorage'

//登录
export const login = (tryCount = 1) => async (dispatch, getState) => {
    console.log(getState())
    dispatch({ type: loginActionTypes.login_waiting, payload: {} })
    const { username, password } = getFormValues('loginForm')(getState())
    try {
        const url = `${base_host}/userLogin`
        const res = await httpRequest.post(url, {
            mobile: username,
            password
        })
        console.log(res)
        if (res.success) {
            if (res.result.type == 41 || res.result.type == 49) {
                const getUserInfoUrl = `${base_host}/user${ObjectToUrl({ userId: res.result.userId })}`
                const getUserInfoRes = await httpRequest.get(getUserInfoUrl)
                if (getUserInfoRes.success) {

                    const { uid, mobile, real_name, type, gender, avatar_image, status } = getUserInfoRes.result[0]
                    const user = {
                        uid, mobile, real_name, type, gender, avatar_image, status,
                        token: res.result.accessToken,
                    }
                    requestHeaders.set('auth-token', res.result.accessToken)
                    requestHeaders.set('user-type', type)
                    requestHeaders.set('user-name', mobile)
                    localStorage.save({
                        key: localStorageKey.USER,
                        data: user
                    })
                    dispatch({ type: loginActionTypes.login_success, payload: { user } })
                    Actions.main()
                } else {
                    ToastAndroid.showWithGravity(`登陆失败：无法获取用户信息！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
                    dispatch({ type: loginActionTypes.login_failed, payload: { failedMsg: '无法获取用户信息！' } })
                }
            }
            else {
                ToastAndroid.showWithGravity(`登陆失败：身份错误！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
                dispatch({ type: loginActionTypes.login_failed, payload: { failedMsg: '身份错误！' } })
            }
        } else {
            //登录失败重新登录
            ToastAndroid.showWithGravity(`登陆失败：${res.msg}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            dispatch({ type: loginActionTypes.login_failed, payload: { failedMsg: res.msg } })
        }
    } catch (err) {
        if (err.message == 'Network request failed') {
            //尝试20次
            if (tryCount < 20) {
                await sleep(1000)
                dispatch(login(tryCount + 1))
            } else {
                ToastAndroid.showWithGravity(`登陆失败：网络链接失败！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
                dispatch({ type: loginActionTypes.login_error, payload: { errorMsg: err } })
            }
        } else {
            ToastAndroid.showWithGravity(`登陆失败：${err}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            dispatch({ type: loginActionTypes.login_error, payload: { errorMsg: err } })
        }
    }
}

export const cleanLogin = () => (dispatch) => {
    dispatch({ type: loginActionTypes.clean_login, payload: {} })
}
