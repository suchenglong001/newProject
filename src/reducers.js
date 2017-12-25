import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import homeReducer from '../src/android/views/home/HomeReducer'
import initializationReducer from '../src/android/views/initialization/InitializationReducer'
import loginReducer from '../src/android/views/login/LoginReducer'
import settingReducer from '../src/android/views/setting/SettingReducer'
import updatePasswordReducer from '../src/android/views/updatePassword/UpdatePasswordReducer'
import retrievePasswordReducer from '../src/android/views/retrievePassword/RetrievePasswordReducer'
import personalCenterReducer from '../src/android/views/personalCenter/PersonalCenterReducer'
import carInfoReducer from '../src/android/views/carInfo/CarInfoReducer'
import checkStatisticsReducer from '../src/android/components/home/checkStatistics/CheckStatisticsReducer'
import checkVehicleListReducer from '../src/android/components/home/checkVehicleList/CheckVehicleListReducer'
import carDetailReducer from '../src/android/components/carInfo/carDetail/CarDetailReducer'


export default combineReducers({
    form: formReducer,
    homeReducer,
    initializationReducer,
    loginReducer,
    settingReducer,
    updatePasswordReducer,
    retrievePasswordReducer,
    personalCenterReducer,
    carInfoReducer,
    checkStatisticsReducer,
    checkVehicleListReducer,
    carDetailReducer
})