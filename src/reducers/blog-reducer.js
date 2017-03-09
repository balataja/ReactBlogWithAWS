import * as types from '../actions/action-types';

export default (state = {
    isFetching: false,
    hasPostedSuccessfully: false,
    items: []
}, action) => {
    console.log("Action Fired: " + action.type)
    switch (action.type) {
        case types.ADD_BLOG:
            //return [Object.assign({}, action.blog), ...state];
            return Object.assign({}, state, {
                hasPostedSuccessfully: false
            })
        case types.ADD_BLOG_SUCCESS:
            return Object.assign({}, state, {
                hasPostedSuccessfully: true,
                items: action.blog
            })
        case types.ADD_BLOG_ERROR:
            return state; // ToDo: handle errors
        case types.REQUEST_BLOGS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.REQUEST_BLOGS_SUCCESS:
            return Object.assign({}, state, action.blogs, {
                isFetching: false,
                items: action.blogs
            })
        case types.REQUEST_BLOGS_ERROR:
            return state; // ToDo: handle errors
        default:
            return state;
    }
}