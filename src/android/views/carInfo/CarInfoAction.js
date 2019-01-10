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
    try {
        const url = `${base_host}/user/${user.uid}/qualityAssurance`
        const res = await httpRequest.post(url, {
            carId: carDetail.id,
            vin: carDetail.vin
        })
        if (res.success) {
            dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
            ToastAndroid.showWithGravity('提交成功！', ToastAndroid.CENTER, ToastAndroid.BOTTOM)
            dispatch(carInfoRecordAction.getCarInfoRecord({ car_id: carDetail.id }))
            dispatch(checkVehicleListAction.getCheckVehicleList())
        } else {
            dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
            ToastAndroid.showWithGravity(`提交失败！${res.msg}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
        }
    } catch (err) {
        dispatch({ type: carInfoActionTypes.qualityAssurance_success, payload: {} })
        ToastAndroid.showWithGravity(`提交失败！${err}`, ToastAndroid.CENTER, ToastAndroid.BOTTOM)
    }
}