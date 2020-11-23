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

// return 一个对象
const addAction = (step) => ({
    type: "add",
    ...step
});

// 支持这种返回一个函数的写法，就是因为使用了 thunk
// return 一个函数
const asyncAddAction = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: 'add' })
        }, 1000)
    }
};

// const asyncAddAction = () => dispatch => {
//     setTimeout(() => {
//         dispatch({ type: 'add' })
//     }, 1000)
// };

const minusAction = (step) => ({
    type: "minus",
    ...step
});


export {
    counterReducer1,
    addAction,
    asyncAddAction,
    minusAction
}