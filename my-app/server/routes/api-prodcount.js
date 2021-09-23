module.exports = function(db,app){
    // Route to manage getting the number of products.
    app.post('/api/prodcount',function(req,res) {
        const collection = db.collection('products');
        collection.find({}).count((err,count)=>{
            res.send({'count':count});
        });
    });
}