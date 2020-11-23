// 数据中心

// 实际干活的工人
// 返回 state ，而不修改数据
const counterReducer1 = (state = 0, action) => {
    // dispatch 把数据提交到这里
    // {type:'add',step:""}
    const step = action.step || 1
    switch (action.type) {
        case 'add':
            return state + step;
        case 'minus':
            return state - step;
        default:
            return state
    }
}

const addAction = (step) => ({
    type: "add",
    ...step
});
const minusAction = (step) => ({
    type: "minus",
    ...step
})


export {
    counterReducer1,
    addAction,
    minusAction
}