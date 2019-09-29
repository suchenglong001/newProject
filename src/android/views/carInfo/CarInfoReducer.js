import { handleActions } from 'redux-actions'
import * as carInfoActionTypes from './CarInfoActionTypes'

const initialState = {
    qualityAssurance: {
        errorMsg: '',
        failedMsg: '',
        isResultStatus: 0
    },
    carSort:{
        errorMsg: '',
        failedMsg: '',
        isResultStatus: 0 
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(错误)，4(执行失败),5(服务器未处理错误)]
export default handleActions({
    [carInfoActionTypes.qualityAssurance_success]: (state, action) => {
        return {
            qualityAssurance: {
                ...initialState.qualityAssurance,
                isResultStatus: 2
            }
        }
    },
    [carInfoActionTypes.qualityAssurance_failed]: (state, action) => {
        return {
            qualityAssurance: {
                ...initialState.qualityAssurance,
                isResultStatus: 4
            }
        }
    },
    [carInfoActionTypes.qualityAssurance_error]: (state, action) => {
        return {
            qualityAssurance: {
                ...initialState.qualityAssurance,
                isResultStatus: 3
            }
        }
    },
    [carInfoActionTypes.qualityAssurance_waiting]: (state, action) => {
        return {
            qualityAssurance: {
                ...initialState.qualityAssurance,
                isResultStatus: 1
            }
        }
    },




    [carInfoActionTypes.save_carSort_success]: (state, action) => {
        return {
            ...state,
            carSort: {
                ...initialState.carSort,
                isResultStatus: 2
            }
        }
    },
    [carInfoActionTypes.save_carSort_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            carSort: {
                ...initialState.carSort,
                isResultStatus: 4,
                failedMsg
            }
        }
    },
    [carInfoActionTypes.save_carSort_waiting]: (state, action) => {
        return {
            ...state,
            carSort: {
                ...initialState.carSort,
                isResultStatus: 1
            }
        }
    },
    [carInfoActionTypes.save_carSort_error]: (state, action) => {
        const { payload: { errorMsg } } = action
        return {
            ...state,
            carSort: {
                ...initialState.carSort,
                isResultStatus: 3,
                errorMsg
            }
        }
    }
}, initialState)