import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as demageEditorActionTypes from './DemageEditorActionTypes'
import * as demageListActionTypes from '../../../views/demageList/DemageListActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'
import { getFormValues } from 'redux-form'


export const updateDamage = (param) => async (dispatch, getState) => {
    //dispatch({ type: demageEditorActionTypes.update_Damage_waiting, payload: { } })
    const { damageId, carId, vin } = param
    const state = getState()
    const { loginReducer: { data: { user } } } = state
    const applyDamageForm = getFormValues('demageEditorForm')(state) ? getFormValues('demageEditorForm')(state) : {}
    const { damageRemark, selectDriver: { drive_name, id, truck_id, truck_num } } = applyDamageForm
    try {
        const url = `${base_host}/user/${user.uid}/damage/${damageId}`
        const res = await httpRequest.put(url, {
            carId,
            vin,
            truckId: truck_id,
            truckNum: truck_num,
            driveId: id,
            driveName: drive_name,
            damageExplain: damageRemark
        })
        if (res.success) {
            dispatch({ type: demageListActionTypes.update_Demage, payload: { id: damageId, truck_id, truck_num, drive_id: id, drive_name, damage_explain: damageRemark } })
            dispatch({ type: demageEditorActionTypes.update_Damage_success, payload: {} })
        } else {
            dispatch({ type: demageEditorActionTypes.update_Damage_failed, payload: { failedMsg: res.msg } })
        }

    } catch (err) {
         dispatch({ type: demageEditorActionTypes.update_Damage_error, payload: { errorMsg: err } })
    }
}