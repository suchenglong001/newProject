import * as httpRequest from '../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../config/Host'
import * as personalCenterActionTypes from './PersonalCenterActionTypes'
import { ObjectToUrl } from '../../../util/ObjectToUrl'

export const updatePersonalImage = (param) => async (dispatch) => {
    dispatch({ type: personalCenterActionTypes.Update_PersonalImage_waiting, payload: {} })
    try {
        const uploadUrl = `${file_host}/user/${param.uploadImage.requiredParam.userId}/image?${ObjectToUrl(param.uploadImage.optionalParam)}`
        const uploadUrlRes = await httpRequest.postFile(uploadUrl, param.uploadImage.postParam)
        if (uploadUrlRes.success) {
            const updateAvatarImageUrl = `${base_host}/user/${param.updateAvatarImage.requiredParam.userId}/avatarImage`
            param.updateAvatarImage.putParam.avatarImage = uploadUrlRes.imageId
            const updateAvatarImageRes = await httpRequest.put(updateAvatarImageUrl, param.updateAvatarImage.putParam)
            if(updateAvatarImageRes.success){
                //dispatch({ type: actionTypes.settingTypes.Change_PersonalImage, payload: { data: uploadUrlRes.imageId } })
                dispatch({ type: personalCenterActionTypes.Update_PersonalImage_success, payload: { } })
            }else{
                dispatch({ type: personalCenterActionTypes.Update_PersonalImage_failed, payload: { failedMsg: updateAvatarImageRes.msg } })
            }
        } else {
            dispatch({ type: personalCenterActionTypes.Update_PersonalImage_failed, payload: { failedMsg: uploadUrlRes.msg } })
        }
    } catch (err) {
        dispatch({ type: personalCenterActionTypes.Update_PersonalImage_error, payload: { errorMsg: err } })
    }
}