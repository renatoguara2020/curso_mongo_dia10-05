var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/primeiroBanco", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
     console.log('Conectou ao MongoDB')
                
});