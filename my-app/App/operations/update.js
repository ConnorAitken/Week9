module.exports = function(db,app,ObjectID){
    // Route to delete a single item
    app.post('/api/update',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set:{name:product.name,description:product.description,price:product.price,units:product.units}},()=>{
            // Return a response to the client to let them know the delete was successful
            res.send({'ok':product.objid});
        });
    });
}