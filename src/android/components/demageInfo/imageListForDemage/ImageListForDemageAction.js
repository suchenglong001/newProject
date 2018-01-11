import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as imageListForDemageActionTypes from './ImageListForDemageActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'

export const getDamageImageList = (param) => async (dispatch, getState) => {
    const { id } = param
    try {
        const url = `${record_host}/damageRecord${ObjectToUrl({ damageId: id })}`
        const res = await httpRequest.get(url)
        console.log('res', res)
        if (res.success) {

        } else {

        }

    } catch (err) {
        console.log(err)
    }
}

export const getDamageImageListWaiting = () => (dispatch, getState) => {
    dispatch({ type: imageListForDemageActionTypes.get_DamageImageList_waiting, payload: {} })
}
