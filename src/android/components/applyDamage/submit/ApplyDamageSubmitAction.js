import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as applyDamageSubmitActionTypes from './ApplyDamageSubmitActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'
import { getFormValues } from 'redux-form'
import { Actions } from 'react-native-router-flux'

export const createDamage = () => async (dispatch, getState) => {
    dispatch({ type: applyDamageSubmitActionTypes.create_Damage_waiting, payload: {} })
    const state = getState()
    const { loginReducer: { data: { user } },
        carDetailReducer: { data: { carDetail } } } = state
    const applyDamageForm = getFormValues('applyDamage')(state) ? getFormValues('applyDamage')(state) : {}
    try {
        const url = `${base_host}/user/${user.uid}/damage`
        const res = await httpRequest.post(url, {
            carId: carDetail.id,
            vin: carDetail.vin,
            truckId: applyDamageForm.selectDriver.truck_id,
            truckNum: applyDamageForm.selectDriver.truck_num,
            driveId: applyDamageForm.selectDriver.id,
            driveName: applyDamageForm.selectDriver.drive_name,
            damageExplain: applyDamageForm.damageRemark
        })
        if (res.success) {
            console.log('res.id ',res.id )
            dispatch({ type: applyDamageSubmitActionTypes.create_Damage_success, payload: { damageId: res.id } })
            Actions.applyDamageUploadImage()
        } else {
            dispatch({ type: applyDamageSubmitActionTypes.create_Damage_failed, payload: { failedMsg: res.msg } })
        }
    }
    catch (err) {
        dispatch({ type: applyDamageSubmitActionTypes.create_Damage_error, payload: { errorMsg: err } })
    }
}

