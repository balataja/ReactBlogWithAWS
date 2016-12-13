import AWS from 'aws-sdk'
import Promise from 'bluebird'
import docClient from './AwsInstance'

var AwsApi = {
    addBlog: function (blog) {
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

    }
}

export default AwsApi