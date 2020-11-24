// npm install prop-types --save
// 类型校验
// thunk中间件
const thunk = ({
    dispatch,
    getState
}) => next => action => {
    if (typeof action == 'function') {
        return action(dispatch, getState)
    }
    return next(action)
}
export default thunk