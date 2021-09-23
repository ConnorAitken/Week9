module.exports = function(db,app,ObjectID){
    // Route to get single item
    app.post('/api/getitem',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        // Create a new mongo Object ID from the passed in _id
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.find({"_id":objectid}).toArray((err,data)=>{
            res.send(data);
        });
    });
}