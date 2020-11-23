// 数据中心

// 实际干活的工人
// 返回 state ，而不修改数据
const asyncReducer = (state = 2, action) => {
    // dispatch 把数据提交到这里
    // {type:'add'}
    switch (action.type) {
        case 'asyncAdd':
            return asyncAdd();
        default:
            return state
    }
}

const asyncAdd = () => setTimeout((state) => {
    return state + 1
}, )


const asyncAddAction = () => ({
    type: "asyncAdd"
});


export {
    asyncReducer,
    asyncAddAction
}