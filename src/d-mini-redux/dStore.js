import {
    createStore
} from './d-redux'


const counterReducer = (state = 10, action) => {
    console.log('初始化', action)
    const step = action.step || 1
    // state += step
    switch (action.type) {
        case 'add':
            return state + step
            // return {...state, num:state.num+step}
        case 'minus':
            return state - step
        default:
            // 初始值 或者默认值
            return state
    }
}

const store = createStore(counterReducer)
console.log('store,,', store)
export default store