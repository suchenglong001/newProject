import * as httpRequest from '../../../../util/HttpRequest'
import { base_host, file_host, record_host } from '../../../../config/Host'
import * as checkStatisticsActionTypes from './CheckStatisticsActionTypes'
import { ObjectToUrl } from '../../../../util/ObjectToUrl'


export const getCheckStatistics = () => async (dispatch, getState) => {
    try {
        const urls = [`${base_host}/damageMonthStat${ObjectToUrl({ declareUserId: 1, yearMonth: 201712 })}`,
        `${base_host}/damageCheckMonthStat${ObjectToUrl({ underUserId: 0, yearMonth: 201712 })}`]
        const res = await Promise.all(urls.map(url => httpRequest.get(url)))
        if (res[0].success && res[1].success) {
            dispatch({
                type: checkStatisticsActionTypes.get_checkStatistics_success, payload: {
                    d_count: res[0].result[0].d_count,
                    check_count: res[1].result[0].check_count
                }
            })
        } else {
            dispatch({ type: checkStatisticsActionTypes.get_checkStatistics_failed, payload: { failedMsg: `${res[0].msg}${res[1].msg}` } })
        }
    }
    catch (err) {
        dispatch({ type: checkStatisticsActionTypes.get_checkStatistics_error, payload: { errorMsg: err } })
    }
}