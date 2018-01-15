import { handleActions } from 'redux-actions'
import * as loginActionTypes from './LoginActionTypes'

const initialState = {
    data: {
        user: {
            uid: 36, //36 ,0 
            mobile: "123",
            real_name: "仓储小",
            type: 29,
            avatar_image: null
        }
    }
}

//isResultStatus(执行结果状态):[0(未执行),1(等待)，2(成功)，3(错误)，4(执行失败),5(服务器未处理错误)]
export default handleActions({
    [(loginActionTypes.change_AvatarImage)]: (state, action) => {
        const { payload: { avatar_image } } = action
        return {
            ...state,
            data: {
                ...state.data,
                user: {
                    ...state.data.user,
                    avatar_image
                }
            }
        }
    }
}, initialState)