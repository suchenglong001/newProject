import * as httpRequest from '../../../util/HttpRequest'
import * as TodayCheckType from './TodayCheckType'
import {ObjectToUrl} from "../../../util/ObjectToUrl"
import {sleep} from "../../../util/util"
import {ToastAndroid} from "react-native"

const pageSize = 50
export const getTodayCheck = () => async (dispatch, getState) => {
    console.log("000")
    try {
        const { communicationSettingReducer: { data: { record_host } } } = getState()
        const { loginReducer: { data: { user: { uid } } } } = getState()
        const url = `${record_host}/opRecord${ObjectToUrl({
            userId: uid,
            op: 10,
            start: 0,
            size: pageSize,
        })}`
        const res = await httpRequest.get(url)
        console.log(res)
        if (res.success) {
            dispatch({
                type: TodayCheckType.get_TodayCheck_success, payload: {
                    todayCheckList: res.result,
                    isComplete: (res.result.length == 0 || res.result.length % pageSize != 0),
                }
            })
        } else {
            dispatch({ type: TodayCheckType.get_TodayCheck_failed, payload: { failedMsg: res.msg } })
        }
    } catch (err) {
        dispatch({ type: TodayCheckType.get_TodayCheck_error, payload: { errorMsg: `${err}` } })
    }
}

export const getTodayCheckListWaiting = () => (dispatch) => {
    dispatch({ type: TodayCheckType.get_TodayCheck_waiting, payload: {} })
}



export const TodayCheckMore = () => async (dispatch, getState) => {
    const { loginReducer: { data: { user: { uid } } },
        todayCheckReducer: { data: { todayCheckList, isComplete } },
        todayCheckReducer } = getState()
    const { communicationSettingReducer: { data: { record_host } } } = getState()

    if (todayCheckReducer.getTodayCheckMore.isResultStatus == 1) {
        await sleep(1000)
        dispatch(TodayCheckMore)
    } else {
        if (!isComplete) {
            dispatch({ type: TodayCheckType.get_TodayCheckMore_waiting, payload: {} })
            try {
                const url = `${record_host}/opRecord${ObjectToUrl({
                    userId: uid,
                    op: 10,
                    start: todayCheckList.length,
                    size: pageSize,
                })}`
                const res = await httpRequest.get(url)
                if (res.success) {
                    dispatch({
                        type: TodayCheckType.get_TodayCheckMore_success, payload: {
                            todayCheckList: res.result,
                            isComplete: (res.result.length == 0 || res.result.length % pageSize != 0),
                        }
                    })
                } else {
                    dispatch({ type: TodayCheckType.get_TodayCheckMore_failed, payload: { failedMsg: res.msg } })
                }
            } catch (err) {
                dispatch({ type: TodayCheckType.get_TodayCheckMore_error, payload: { errorMsg: err } })
            }
        } else {
            ToastAndroid.show('已全部加载完毕！', 10)
        }
    }
}