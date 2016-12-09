var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAJHNIALSLAVA74PEA",
    secretAccessKey: "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",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var GetDate = function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm+'/'+dd+'/'+yyyy;
    return today;
}

var params = {
    TableName: "Blogs",
        Item: {
            "title": "Blog Title",
            "postedDate": GetDate(),
            "info": { 
                    tags: "Coding"
            } 
        }
};

docClient.put(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
    {
        console.log(JSON.stringify(data, null, 2));
        data.Items.forEach(function(blog) {
            
        })
    }
});
