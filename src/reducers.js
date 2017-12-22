import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from '../src/android/views/home/HomeReducer'
import initializationReducer from '../src/android/views/initialization/InitializationReducer'
import loginReducer from '../src/android/views/login/LoginReducer'
import settingReducer from '../src/android/views/setting/SettingReducer'
import updatePasswordReducer from '../src/android/views/updatePassword/UpdatePasswordReducer'
import retrievePasswordReducer from '../src/android/views/retrievePassword/RetrievePasswordReducer'

export default combineReducers({
    form: formReducer,
    homeReducer,
    initializationReducer,
    loginReducer,
    settingReducer,
    updatePasswordReducer,
    retrievePasswordReducer
})