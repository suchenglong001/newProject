import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as applyDamageSubmitActionTypes from './ApplyDamageSubmitActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'
import { getFormValues } from 'redux-form'

export const createDamage = () => async (dispatch, getState) => {
    const state = getState()
    console.log(state)
    const { loginReducer: { data: { user } },
        carDetailReducer: { data: { carDetail } } } = state
    const applyDamageForm = getFormValues('applyDamage')(state) ? getFormValues('applyDamage')(state) : {}
    console.log(applyDamageForm)
    console.log({
        carId: carDetail.id,
        vin: carDetail.vin,
        truckId: applyDamageForm.selectDriver.truck_id,
        truckNum: applyDamageForm.selectDriver.truck_num,
        driveId: applyDamageForm.selectDriver.id,
        driveName: applyDamageForm.selectDriver.drive_name,
        damageExplain: applyDamageForm.damageRemark
    })
    try {
        const url = `${base_host}/user/${user.uid}/damage`
        // const res = await httpRequest.post(url, {
        //     carId: carDetail.id,
        //     vin: carDetail.vin,
        //     truckId: applyDamageForm.truck_id,
        //     truckNum: applyDamageForm.truck_num,
        //     driveId: applyDamageForm.id,
        //     driveName: applyDamageForm.drive_name,
        //     damageExplain: applyDamageForm.damageRemark
        // })
        // if (res.success) {
        //     dispatch({ type: applyDamageSubmitActionTypes.create_Damage_success, payload: { driverList: res.result } })
        // } else {
        //     dispatch({ type: applyDamageSubmitActionTypes.create_Damage_failed, payload: { failedMsg: res.msg } })
        // }
    }
    catch (err) {
        dispatch({ type: applyDamageSubmitActionTypes.create_Damage_error, payload: { errorMsg: err } })
    }
}
