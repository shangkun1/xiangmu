import * as Types from '../types';
export default (state = 0, action) => {
    switch (action.type) {
        case Types.REDUX_ACTION_ADDSCORE:
            state += 10;
            return state;
        case Types.REDUX_ACTION_SUBSCORE:
            state -= 10;
            return state;
        default:
            return state;
    }
}
// 使用action中的数据
// export default (state = 0, action) => {
//     console.log(state);
//     switch (action.type) {
//         case Types.REDUX_ACTION_ADDSCORE:
//             action.score += 10;
//             return action.score;
//         case Types.REDUX_ACTION_SUBSCORE:
//             action.score -= 10;
//             return action.score;
//         default:
//             return state;
//     }
// }