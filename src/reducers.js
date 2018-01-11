import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import initializationReducer from '../src/android/views/initialization/InitializationReducer'
import loginReducer from '../src/android/views/login/LoginReducer'
import carInfoReducer from '../src/android/views/carInfo/CarInfoReducer'
import settingReducer from '../src/android/views/setting/SettingReducer'
import updatePasswordReducer from '../src/android/views/updatePassword/UpdatePasswordReducer'
import retrievePasswordReducer from '../src/android/views/retrievePassword/RetrievePasswordReducer'
import personalCenterReducer from '../src/android/views/personalCenter/PersonalCenterReducer'
import applyDamageUploadImageReducer from '../src/android/views/applyDamageUploadImage/ApplyDamageUploadImageReducer'
import checkStatisticsReducer from '../src/android/components/home/checkStatistics/CheckStatisticsReducer'
import checkVehicleListReducer from '../src/android/components/home/checkVehicleList/CheckVehicleListReducer'
import carDetailReducer from '../src/android/components/carInfo/carDetail/CarDetailReducer'
import carInfoRecordReducer from '../src/android/components/carInfo/carInfoRecord/CarInfoRecordReducer'
import applyDamageSubmitReducer from '../src/android/components/applyDamage/submit/ApplyDamageSubmitReducer'
import selectDriverReducer from '../src/android/views/select/driver/SelectDriverReducer'
import searchCarReducer from '../src/android/views/searchCar/SearchCarReducer'
import demageListReducer from './android/views/demageList/DemageListReducer'
import carInfoForDemageReducer from './android/components/demageInfo/carInfoForDemage/CarInfoForDemageReducer'
import recordForDemageReducer from './android/components/demageInfo/recordForDemage/RecordForDemageReducer'
import demageEditorReducer from './android/components/demageInfo/demageEditor/DemageEditorReducer'

export default combineReducers({
    form: formReducer,
    initializationReducer,
    loginReducer,
    settingReducer,
    updatePasswordReducer,
    retrievePasswordReducer,
    personalCenterReducer,
    checkStatisticsReducer,
    checkVehicleListReducer,
    carDetailReducer,
    carInfoRecordReducer,
    applyDamageUploadImageReducer,
    applyDamageSubmitReducer,
    selectDriverReducer,
    carInfoReducer,
    searchCarReducer,
    demageListReducer,
    carInfoForDemageReducer,
    recordForDemageReducer,
    demageEditorReducer
})