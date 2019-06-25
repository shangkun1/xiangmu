import * as Types from '../types';

// 写法一
// export const scoreAction = {
//     type: 'REDUX_ACTION_SCORE'
// }

// 写法二
export function addScoreAction(score) {
    return {
        type: Types.REDUX_ACTION_ADDSCORE,
        score
    }
}
// 使用了redux-thunk 之后aciton可以返回一个方法
export function asyncAddScoreAction() {
    return function (dispatch, getState) {

        setTimeout(() => {
            dispatch(addScoreAction(getState().score));
        }, 1000);

    }
}
export function subScoreAction() {
    return {
        type: Types.REDUX_ACTION_SUBSCORE,
        score: 0
    }
}