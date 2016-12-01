var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Movies",
        Item: {
            "year":  2005,
            "title": "Inglorious Bastards",
            "info": { 
                    plot: "Everything happens all at once.",
                    rating: 5.5,
                    actors: ["Larry", "Moe", "Curly"]
            } 
        }
};

docClient.put(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});