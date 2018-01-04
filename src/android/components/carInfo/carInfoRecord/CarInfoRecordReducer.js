import { handleActions } from 'redux-actions'
import * as carInfoRecordActionTypes from './CarInfoRecordActionTypes'
import { isEqualDispatch } from '../../../../util/IsObjectValueEqual'

const initialState = {
    data: {
        carInfoRecord: []
    },
    getCarInfoRecord: {
        errorMsg: '',
        failedMsg: '',
        isResultStatus: 0
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(错误)，4(执行失败),5(服务器未处理错误)]
export default handleActions({
    [carInfoRecordActionTypes.get_carInfoRecord_success]: (state, action) => {
        const { payload: { carDetail } } = action
        if (!isEqualDispatch(payload, state.data)) {
            return {
                ...state,
                data: {
                    d_count,
                    check_count
                },
                getCheckStatistics: {
                    ...initialState.getCheckStatistics,
                    isResultStatus: 2,
                }
            }
        } else if (state.getCheckStatistics.isResultStatus != 2) {
            return state
        } else {
            return state
        }
    },
    [carInfoRecordActionTypes.get_carInfoRecord_waiting]: (state, action) => {
        return {
            ...state,
            getCarInfoRecord: {
                ...initialState.getCarInfoRecord,
                isResultStatus: 1,
            }
        }
    },
    [carInfoRecordActionTypes.get_carInfoRecord_failed]: (state, action) => {
        const { payload: { failedMsg } } = action
        return {
            ...state,
            getCarInfoRecord: {
                ...initialState.getCarInfoRecord,
                isResultStatus: 4,
                failedMsg
            }
        }
    },
    [carInfoRecordActionTypes.get_carInfoRecord_error]: (state, action) => {
        const { payload: { errorMsg } } = action
        return {
            ...state,
            getCarInfoRecord: {
                ...initialState.getCarInfoRecord,
                isResultStatus: 3,
                errorMsg
            }
        }
    },
    [carInfoRecordActionTypes.get_carInfoRecord_resetStatus]: (state, action) => {
        state.getCarInfoRecord.isResultStatus = 0
        return state
    }
}, initialState)