import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as imageListForDemageActionTypes from './ImageListForDemageActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'

export const getDamageImageList = (param) => async (dispatch, getState) => {
    const { id } = param
    try {
        const url = `${record_host}/damageRecord${ObjectToUrl({ damageId: id })}`
        const res = await httpRequest.get(url)
        if (res.success) {
            dispatch({ type: imageListForDemageActionTypes.get_DamageImageList_success, payload: { demageImageList: res.result[0].damage_image } })
        } else {
            dispatch({ type: imageListForDemageActionTypes.get_DamageImageList_failed, payload: { failedMsg: res.msg } })
        }
    } catch (err) {
        dispatch({ type: imageListForDemageActionTypes.get_DamageImageList_error, payload: { errorMsg: err } })
    }
}

export const getDamageImageListWaiting = () => (dispatch, getState) => {
    dispatch({ type: imageListForDemageActionTypes.get_DamageImageList_waiting, payload: {} })
}
