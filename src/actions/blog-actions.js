import * as types from './action-types';
import AWS from 'aws-sdk'
import {GetDate} from '../common/functions'

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

const addBlogToDb = (blog) => {
    var params = {
        TableName: "Blogs",
            Item: {
                "postedDate": GetDate(),
                "titleId": blog.title.replace(/\s/g, ''),
                "info": { 
                        tags: blog.tags,
                        body: blog.body,
                        title: blog.title
                } 
            }
    };

    docClient.put(params, function(err, data) {
        if (err)
            console.log(JSON.stringify(err, null, 2));
        else
            console.log(JSON.stringify(data, null, 2));
    });
}

const getBlogFromDb = (callback) => {
    var params = {
        TableName : "Blogs",
        KeyConditionExpression: ""
    }

}

const getBlogsFromDb = (callback) => {
    var params = {
        TableName : "Blogs",
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Scan succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.titleId + ": " + item.postedDate);
            });
        }
        callback(err, data)
    });
}

export const addBlog = (blog) => {
    addBlogToDb(blog)
    return {
        type: types.ADD_BLOG,
        blog
    }
}

export const receiveBlog = (blog) => {
    return {
        type: types.GET_BLOG,
        blog
    }
}

export const receiveBlogs = (blog) => {
    return {
        type: types.RECEIVE_BLOG,
        blog
    }
}

export const getBlog = () => dispatch => {
    return getBlogFromDb(function(err, data) {
        if (err) {
            console.log("Unable to query DB for blog:", JSON.stringify(err, null, 2))
        }
        else {
            dispatch(receiveBlog(data.Items))
        }
    })
}

export const getBlogs = () => dispatch => {
    return getBlogsFromDb(function(err, data) {
        if (err) {
            console.log("Unable to scan DB for blogs:", JSON.stringify(err, null, 2))
        }
        else {
            dispatch(receiveBlogs(data.Items))
        }
    })
}