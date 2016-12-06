import * as types from './action-types';
import AWS from 'aws-sdk'
import Promise from 'bluebird'
import {GetDate} from '../common/functions'

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

export const addBlog = (blog) => {
    AwsApi.addBlog(blog)
    return {
        type: types.ADD_BLOG,
        blog
    }
}

var AwsApi = {
    addBlog: function (blog) {
        var params = {
            TableName: "Blogs",
                Item: {
                    "postedDate": GetDate(),
                    "title": blog.title,
                    "info": { 
                            tags: blog.tags
                    } 
                }
        };

        docClient.put(params, function(err, data) {
            if (err)
                console.log(JSON.stringify(err, null, 2));
            else
                console.log(JSON.stringify(data, null, 2));
        });

    },

    getBlogs: function () {
        var params = {
            TableName : "Blogs",
            KeyConditionExpression: "#dt = :date",
            ExpressionAttributeNames:{
                "#dt": "postedDate"
            },
            ExpressionAttributeValues: {
                ":date":"12/06/2016"
            }
        };

        docClient.query(params, function(err, data) {
            if (err) {
                console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            } else {
                console.log("Query succeeded.");
                data.Items.forEach(function(item) {
                    console.log(" -", item.title + ": " + item.postedDate);
                });
            }
        });
    }
}

export default AwsApi