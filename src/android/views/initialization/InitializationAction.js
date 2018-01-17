/**
 * Created by lingxue on 2017/4/21.
 */
//import { Actions } from 'react-native-router-flux'
import * as httpRequest from '../../../util/HttpRequest'
import { base_host } from '../../../config/Host'
import * as initializationActionTypes from './InitializationActionTypes'
import * as loginActionTypes from '../login/LoginActionTypes'
import { ObjectToUrl } from '../../../util/ObjectToUrl'
import localStorageKey from '../../../util/LocalStorageKey'
import localStorage from '../../../util/LocalStorage'
import requestHeaders from '../../../util/RequestHeaders'
import * as android_app from '../../../android_app.json'
import { sleep } from '../../../util/util'
import { Actions } from 'react-native-router-flux'
/** 
 * 
 * initApp : APP初始化
 * 
 * param : 对应执行步骤执行时所需要的参数
 * currentStep : 执行到第N步（从1开始）
 * tryCount : 当遇到网络错误的时候尝试的次数（从1开始）
 * 
 * 
 * 初始化流程：
 * 第一步：验证版本是否是最新版本
 * 第二步：获取本地localstorage的数据
 * 第三步：换network request所需要的token
 */
export const initApp = (currentStep = 1, tryCount = 1, param = null) => (dispatch) => {
    if (currentStep == 1) {
        //执行第一步
        console.log(`========执行第${currentStep}步    第${tryCount}次尝试========`)
        dispatch(validateVersion(tryCount))
    } else if (currentStep == 2) {
        //执行第二步
        console.log(`========执行第${currentStep}步    第${tryCount}次尝试========`)
        dispatch(loadLocalStorage(tryCount))
    } else if (currentStep == 3) {
        //执行第三步
        console.log(`========执行第${currentStep}步    第${tryCount}次尝试========`)
        dispatch(validateToken(tryCount, param))
    }
}

//第一步：获取最新version信息
export const validateVersion = (tryCount = 1) => async (dispatch) => {
    const currentStep = 1
    try {
        const url = `${base_host}/app${ObjectToUrl({ app: 4, type: 1 })}`
        const res = await httpRequest.get(url)
        if (res.success) {
            let data = {
                currentVersion: android_app.version,
            }
            const newestVersionInfo = res.result.sort((a, b) => b.id - a.id)[0]
            if (newestVersionInfo) {
                data.newestVersion = newestVersionInfo.version
                data.url = newestVersionInfo.url
                data.remark = newestVersionInfo.remark
                const currentVersionArr = android_app.version.split('.')
                const newestVersionArr = newestVersionInfo.version.split('.')
                if (currentVersionArr[0] < newestVersionArr[0] || currentVersionArr[1] < newestVersionArr[1] || currentVersionArr[2] < newestVersionArr[2]) {
                    if (newestVersionInfo.force_update == 1) {
                        data.force_update = 1
                    } else {
                        data.force_update = 2 //force_update:0(版本为最新版), 1(版本需要太旧，强制更新), 2(版本需要太旧，但不需要强制更新)
                    }
                } else {
                    data.force_update = 0
                }
            } else {
                data.force_update = 0
                data.newestVersion = android_app.version
            }
            dispatch({ type: initializationActionTypes.Valdate_Version_Success, payload: { data, step: currentStep } })
            if (data.force_update != 1) {
                dispatch(initApp(currentStep + 1))
            }
        } else {
            dispatch({ type: initializationActionTypesValdate_Version_Failed, payload: { failedMsg: res.msg, step: currentStep } })
        }
    } catch (err) {
        if (err.message == 'Network request failed') {
            //尝试20次
            if (tryCount < 20) {
                await sleep(1000)
                dispatch(initApp(currentStep, tryCount + 1))
            } else {
                dispatch({ type: initializationActionTypes.Valdate_Version_NetWorkError, payload: { step: currentStep } })
            }
        } else {
            dispatch({ type: initializationActionTypes.Valdate_Version_Error, payload: { errorMsg: err.message, step: currentStep } })
        }
    }
}

//第二步：获取localStorage中的user数据
export const loadLocalStorage = ( tryCount = 1) => async (dispatch) => {
    //console.log('loadLocalStorage')
    const currentStep = 2
    try {
        // localStorage.save({
        //     key: localStorageKey.USER,
        //     data: {
        //         userId: 93,
        //         token: 'v4m1x9wFedXZ6S9rbV5Ax-9EAWY=9i39iMZK1a5578b3b728c1f8dbc87071b199c67f8b4ae35e233647cd1825977e83a8c812d194c41a71049edad8470b361d415a76'
        //     }
        // })
        //localStorage.remove({ key: localStorageKey.USER })
        const localStorageRes = await localStorage.load({ key: localStorageKey.USER })
       // console.log('localStorageRes', localStorageRes)
        // console.log(localStorageRes)
        if (localStorageRes.token && localStorageRes.userId) {
            dispatch({ type: initializationActionTypes.Load_LocalStorage_Success, payload: { step: currentStep } })
            dispatch(initApp(currentStep + 1, 1, {
                requiredParam: {
                    userId: localStorageRes.userId,
                    token: localStorageRes.token
                }
            }))
        }
        else {
            //localStorage.remove({ key: localStorageKey.USER })
            dispatch({ type: initializationActionTypes.Load_LocalStorage_Failed, payload: { step: currentStep } })
            Actions.mainRoot()
        }
    } catch (err) {
        //console.log(err)
        if (err.name == 'NotFoundError') {
            dispatch({ type: initializationActionTypes.Load_LocalStorage_NotFoundError, payload: { step: currentStep } })

        } else {
            localStorage.remove({ key: localStorageKey.USER })
            dispatch({ type: initializationActionTypes.Load_LocalStorage_Error, payload: { errorMsg: err.message, step: currentStep } })
        }
        Actions.mainRoot()
    }

}

//第三步:更换service-token ,如果更新成功将登陆数据放入userReducer
export const validateToken = (tryCount = 1, param) => async (dispatch) => {
    const currentStep = 3
    try {
        const url = `${base_host}/user/${param.requiredParam.userId}/token/${param.requiredParam.token}`
        const res = await httpRequest.get(url)
        // console.log('res', res)
        if (res.success) {
            //判断请求是否成功，如果成功，更新token
            localStorage.save({
                key: localStorageKey.USER,
                data: {
                    userId: res.result.userId,
                    token: res.result.accessToken,
                    userType: res.result.type,
                    userStatus: res.result.userStatus,
                    mobile: res.result.phone
                }
            })
            requestHeaders.set('auth-token', res.result.accessToken)
            requestHeaders.set('user-type', res.result.type)
            requestHeaders.set('user-name', res.result.phone)
            dispatch({
                type: loginActionTypes.Set_UserInfo, payload: {
                    user: {
                        userId: res.result.userId,
                        token: res.result.accessToken,
                        userType: res.result.type,
                        userStatus: res.result.userStatus,
                        mobile: res.result.phone,
                    }
                }
            })
            dispatch({ type: initializationActionTypes.validate_token_Success, payload: { step: currentStep } })
            //console.log('res',res)
            Actions.mainRoot()
        }
        else {
            //判断请求是否成功，如果失败，跳转到登录页
            dispatch({ type: initializationActionTypes.validate_token_Failed, payload: { step: currentStep } })
            Actions.mainRoot()
        }
    } catch (err) {
        //console.log(err)
        if (err.message == 'Network request failed') {
            //尝试20次
            if (tryCount < 20) {
                await sleep(1000)
                dispatch(initApp(currentStep, tryCount + 1,param ))
            } else {
                dispatch({ type: initializationActionTypesvalidate_token_NetWorkError, payload: { param, step: currentStep } })
            }
        } else {
            dispatch({ type: initializationActionTypes.validate_token_Error, payload: { step: currentStep } })
            Actions.mainRoot()
        }
    }
}



export const initAppWaiting = () => (dispatch) => {
    dispatch({ type: initializationActionTypes.INIT_App_Waiting, payload: {} })
}

export const resetInitialization = () => (dispatch) => {
    dispatch({ type: initializationActionTypes.RESET_INITIALIZATION, payload: {} })
}

export const resetGetVersion = () => (dispatch) => {
    dispatch({ type: initializationActionTypes.RESET_GETVERSION, payload: {} })
}