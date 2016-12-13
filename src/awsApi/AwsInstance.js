import AWS from 'aws-sdk'
import Promise from 'bluebird'

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});
AWS.config.setPromisesDependency(Promise);

var docClient = new AWS.DynamoDB.DocumentClient()

export default docClient;