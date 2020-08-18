import * as httpRequest from '../../../util/HttpRequest'
import * as carInfoActionTypes from './CarInfoActionTypes'
import { ObjectToUrl } from '../../../util/ObjectToUrl'
import { ToastAndroid } from 'react-native'
import * as carInfoRecordAction from '../../components/carInfo/carInfoRecord/CarInfoRecordAction'
import * as checkVehicleListAction from '../../components/home/checkVehicleList/CheckVehicleListAction'

export const qualityAssurance = () => async (dispatch, getState) => {
    const {
        loginReducer: { data: { user } },
        carDetailReducer: { data: { carDetail } } } = getState()
    const { communicationSettingReducer: { data: { base_host } } } = getState()
    dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:true} })
    try {
        const url = `${base_host}/user/${user.uid}/qa`
        const res = await httpRequest.post(url, {
            carId: carDetail.id,
            vin: carDetail.vin
        })
        if (res.success) {
            dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
            dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
            ToastAndroid.showWithGravity('提交成功！', ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            dispatch(carInfoRecordAction.getCarInfoRecord({ car_id: carDetail.id, vin: carDetail.vin }))
            dispatch(checkVehicleListAction.getCheckVehicleList())
        } else {
            dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
            dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
            ToastAndroid.showWithGravity(`提交失败！${res.msg}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        }
    } catch (err) {
        dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
        dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
        ToastAndroid.showWithGravity(`提交失败！${err}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
    }
}


export const carSort = param => async (dispatch, getState) => {
    dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:true} })
    try {

        dispatch({ type: carInfoActionTypes.save_carSort_waiting })
        const { communicationSettingReducer: { data: { base_host, record_host, file_host } } } = getState()
        const { loginReducer: { data: { user: { uid } } } } = getState()
        const url = `${base_host}/user/${uid}/carSort`
        const res = await httpRequest.post(url, {
            carId: param.carId,
            vin: param.vin,
            opType:param.opType
        })
        if (res.success) {
            dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
            if(param.opType==11) {
                ToastAndroid.showWithGravity(`分拣入库成功！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            }else if(param.opType==13){
                ToastAndroid.showWithGravity(`分拣出库成功！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            }else if(param.opType==17){
                ToastAndroid.showWithGravity(`分拣成功！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            }
            dispatch({ type: carInfoActionTypes.save_carSort_success })
            dispatch(carInfoRecordAction.getCarInfoRecord({ car_id: param.carId, vin: param.vin }))

        } else {
            dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
            ToastAndroid.showWithGravity(`分拣失败！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            dispatch({ type: carInfoActionTypes.save_carSort_failed, payload: { failedMsg: res.msg } })
        }
    } catch (err) {
        dispatch({ type: carInfoActionTypes.disabled, payload: {disabled:false} })
        ToastAndroid.showWithGravity(`分拣失败！`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        dispatch({ type: carInfoActionTypes.save_carSort_error, payload: { errorMsg: res.msg } })
    }
}