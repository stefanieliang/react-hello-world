// 数据中心
import { createStore } from 'redux'

// 实际干活等工人
// 返回 state ，而不修改数据
const counterReducer = (state = 0, action) => {
    // dispatch 把数据提交到这里
    // {type:'add'}
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state
    }
}

// 创建一个仓库
const store = createStore(counterReducer)
export default store