var fs = require('fs');

module.exports = function(db){
    fs.readFile('../data/data.json', 'utf8', function(err, data) {
        if (err) throw err;
        let docArray = JSON.parse(data);
        const collection = db.collection('products');
        collection.insertMany(docArray, function(err, result) {
        });
    });
}