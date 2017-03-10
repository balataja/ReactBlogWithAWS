import * as types from './action-types';
import AWS from 'aws-sdk'
import {GetDate} from '../common/functions'
import {CreateNotification} from '../common/notifications'

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

// ToDo: Decouple Database api from actions

export const requestBlogs = (blogs) => {
    return {
        type: types.REQUEST_BLOGS,
        blogs
    }
}

export const requestBlogsSuccess = (blogs) => {
    return {
        type: types.REQUEST_BLOGS_SUCCESS,
        blogs
    }
}

export const requestBlogsError = (err) => {
    return {
        type: types.REQUEST_BLOGS_ERROR,
        err
    }
}

export const addBlog = (blog) => {
    return {
       type: types.ADD_BLOG,
       blog
    }
}

export const addBlogSuccess = (blog) => {
    return {
        type: types.ADD_BLOG_SUCCESS,
        blog
    }
}

export const addBlogError = (err) => {
    return {
        type: types.ADD_BLOG_ERROR,
        err
    }
}

export const postBlog = (blog) => dispatch => {
    var blogWithPostData = {
        "postedDate": GetDate(),
                "titleId": blog.title.replace(/\s/g, ''),
                "info": { 
                        tags: blog.tags,
                        body: blog.body,
                        title: blog.title
                } 
    };

    dispatch(addBlog(blogWithPostData))
    
    var params = {
        TableName: "Blogs",
            Item: blogWithPostData
    };

    docClient.put(params, function(err, data) {
        if (err)
        {
            console.log(JSON.stringify(err, null, 2));
            dispatch(addBlogError(err))
            CreateNotification('error')
        }
        else
        {
            console.log(JSON.stringify(data, null, 2));
            dispatch(addBlogSuccess(data))
            CreateNotification('success')
        }
    });
}

export const getBlogs = () => dispatch => {
    dispatch(requestBlogs())

    var params = {
        TableName : "Blogs",
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            dispatch(requestBlogsError(err))
        } else {
            console.log("Scan succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.titleId + ": " + item.postedDate);
            });
            dispatch(requestBlogsSuccess(data.Items))
        }
    });
}