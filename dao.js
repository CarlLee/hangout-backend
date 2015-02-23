var mongodb = require('mongodb');
var client = mongodb.MongoClient;

exports.connect = function(url, callback){
    client.connect(url, function(err, db){
        exports.db = db;
        exports.user_collection = db.collection('hangout-users');
        console.log('mongodb connected!');
        if(typeof callback == 'function'){
            callback(undefined, db);
        }
    });
};