const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017'; // Connection URL
const client = new MongoClient(url); // Create a new MongoClient
const funOrders = require('./dbOperations/funOrders'); // Define a sequence of db operations

MongoClient.connect(url, {maxPoolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    // Callback funciton code. When we have a connection start the rest of the app.
    if (err) {return console.log(err);}
    const dbName = 'mydb';
    const db = client.db(dbName);

    require('./operations/add.js')(db,app);
    require('./operations/read.js')(db,app);
    require('./operations/update.js')(db,app,ObjectID);
    require('./operations/remove.js')(db,app,ObjectID);
    const drop = require('./operations/drop.js');
    const readData = require('./operations/create.js');
    drop(db);
    readData(db);
});