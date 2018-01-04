import { handleActions } from 'redux-actions'
import * as carDetailActionTypes from './CarDetailActionTypes'
import { isEqualDispatch } from '../../../../util/IsObjectValueEqual'

const initialState = {
    data: {
        carDetail: {}
    },
    getCarDetail: {
        errorMsg: '',
        failedMsg: '',
        isResultStatus: 0
    }
}


//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(错误)，4(执行失败),5(服务器未处理错误)]
export default handleActions({
    [carDetailActionTypes.get_carDetail_success]: (state, action) => {
        const { payload: { carDetail } } = action
        console.log(carDetail)
        return state
        // if (!isEqualKeys(payload, state.data) || state.getCheckStatistics.isResultStatus != 2) {
        //     return {
        //         ...state,
        //         data: {
        //             d_count,
        //             check_count
        //         },
        //         getCheckStatistics: {
        //             ...initialState.getCheckStatistics,
        //             isResultStatus: 2,
        //         }
        //     }
        // } else {
        //     return state
        // }
    },
    // [carDetailActionTypes.get_carDetail_waiting]: (state, action) => {
    //     return {
    //         ...state,
    //         getCheckStatistics: {
    //             ...initialState.getCheckStatistics,
    //             isResultStatus: 1,
    //         }
    //     }
    // },
    // [carDetailActionTypes.get_carDetail_failed]: (state, action) => {
    //     const { payload: { failedMsg } } = action
    //     return {
    //         ...state,
    //         getCheckStatistics: {
    //             ...initialState.getCheckStatistics,
    //             isResultStatus: 4,
    //             failedMsg
    //         }
    //     }
    // },
    // [carDetailActionTypes.get_carDetail_error]: (state, action) => {
    //     const { payload: { errorMsg } } = action
    //     return {
    //         ...state,
    //         getCheckStatistics: {
    //             ...initialState.getCheckStatistics,
    //             isResultStatus: 3,
    //             errorMsg
    //         }
    //     }
    // }
}, initialState)