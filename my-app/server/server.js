const express = require('express'); //used for routing
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017'; // Connection URL

MongoClient.connect(url, {maxPoolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    // Callback funciton code. When we have a connection start the rest of the app.
    if (err) {return console.log(err);}
    const dbName = 'mydb';
    const db = client.db(dbName);

    require('./routes/api-add.js')(db,app);
    require('./routes/api-prodcount.js')(db,app);
    require('./routes/api-validid.js')(db,app);
    require('./routes/api-getlist.js')(db,app);
    require('./routes/api-getitem.js')(db,app,ObjectID);
    require('./routes/api-update.js')(db,app,ObjectID);
    require('./routes/api-deleteitem.js')(db,app,ObjectID);
    const readData = require('./read-data.js');
    const drop = require('./drop.js');

    // Start the server listening on port 3000. Outputs message to console once server has started.
    var server = http.listen(3000, function() {
        var d = new Date();
        var n = d.getHours();
        var m = d.getMinutes();
        console.log('Server has been started at: ' + n + ':' + m);
        console.log("Server listening on http://localhost:3000/");
        drop(db);
        readData(db);
    });
});