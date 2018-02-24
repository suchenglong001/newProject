import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as checkVehicleListActionTypes from './CheckVehicleListActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'
import { isEqualArr } from '../../../../util/IsObjectValueEqual'

export const getCheckVehicleList = () => async (dispatch, getState) => {
    try {
        const { loginReducer: { data: { user: { uid } } } } = getState()
        const url = `${record_host}/opRecord${ObjectToUrl({ userId: uid, op: 10, start: 0, size: 20 })}`
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({
                type: checkVehicleListActionTypes.get_checkVehicleList_success, payload: {
                    checkVehicleList: res.result
                }
            })
        } else {
            dispatch({ type: checkVehicleListActionTypes.get_checkVehicleList_failed, payload: { failedMsg: res.msg } })
        }
    }
    catch (err) {
        dispatch({ type: checkVehicleListActionTypes.get_checkVehicleList_error, payload: { errorMsg: err } })
    }
}