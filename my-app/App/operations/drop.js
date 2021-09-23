module.exports = function(db){
    const collection = db.collection('products');
    collection.drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });
}