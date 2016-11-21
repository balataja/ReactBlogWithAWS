import * as types from './action-types';

export const addBlog = (blog) => {
    return {
        type: types.ADD_BLOG,
        blog
    }
}