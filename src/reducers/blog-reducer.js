import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_BLOG:
            return [Object.assign({}, action.blog), ...state];
        case types.RECEIVE_BLOG:
            return [...action.blog, ...state];
        default:
            return state;
    }
}