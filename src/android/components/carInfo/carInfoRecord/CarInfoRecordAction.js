import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as carInfoRecordActionTypes from './CarInfoRecordActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'

export const getCarInfoRecord = (param) => async (dispatch, getState) => {
    const { car_id } = param
    const { loginReducer: { data: { user: { uid } } } } = getState()
    try {
        const url = `${record_host}/user/${uid}/car/${car_id}/record`
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: carInfoRecordActionTypes.get_carInfoRecord_success, payload: { carInfoRecord: res.result[0] } })
        } else {
            dispatch({ type: carInfoRecordActionTypes.get_carInfoRecord_failed, payload: { errorMsg: res.msg } })
        }
    }
    catch (err) {
        dispatch({ type: carInfoRecordActionTypes.get_carInfoRecord_error, payload: { errorMsg: err } })
    }
}

export const getCarInfoRecordWaiting = () => (dispatch) => {
    dispatch({ type: carInfoRecordActionTypes.get_carInfoRecord_waiting, payload: {} })
}

// export const getCarInfoRecordResetStatus = () => (dispatch) => {
//     dispatch({ type: carInfoRecordActionTypes.get_carInfoRecord_resetStatus, payload: {} })
// }