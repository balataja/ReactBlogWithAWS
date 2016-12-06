import * as types from './action-types';
import AWS from 'aws-sdk'
import Promise from 'bluebird'

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
                    "postedDate":  new Date(),
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

    }
}

export default AwsApi