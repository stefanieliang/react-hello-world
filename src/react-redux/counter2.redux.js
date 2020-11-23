// 数据中心

// 实际干活的工人
// 返回 state ，而不修改数据
const counterReducer2 = (state = 2, action) => {
    // dispatch 把数据提交到这里
    // {type:'add'}
    switch (action.type) {
        case 'double':
            return state * 2;
        default:
            return state
    }
}

const doubleAction = (step) => ({
    type: "double",
    ...step
});


export {
    counterReducer2,
    doubleAction
}