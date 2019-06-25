import * as Types from '../types';
export default (state = {}, action) => {
    switch (action.type) {
        case Types.REDUX_ACTION_GETK1:
            // console.log(action.data);
            return action.data;
        default:
            return state;
    }
}