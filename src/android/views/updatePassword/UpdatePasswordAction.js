import httpRequest from '../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../config/Host'
import * as updatePasswordActionTypes from './UpdatePasswordActionTypes'
import { ObjectToUrl } from '../../../util/ObjectToUrl'

export const updatePassword = () => (dispatch, getState) => {
    const { values = {} } = getState().form.updatePassword
    console.log(values)
}