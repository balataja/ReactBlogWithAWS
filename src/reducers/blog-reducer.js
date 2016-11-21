import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_BLOG:
            return [...state, Object.assign({}, action.blog)];
        default:
            return state;
    }
}