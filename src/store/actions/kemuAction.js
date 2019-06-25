import * as Types from '../types';
import Http from '../../http';

function getK1(data) {
    return {
        type: Types.REDUX_ACTION_GETK1,
        data
    }
}
export function getHttpK1() {
    return function (dispatch) {
        Http.k1(1, function (res) {
            let obj = JSON.parse(res.data.data);
            dispatch(getK1(obj))
        });
    }
}