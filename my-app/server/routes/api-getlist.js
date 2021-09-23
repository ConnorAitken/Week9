module.exports = function(db,app){
    // Route to get list of all items from the database.
    app.post('/api/getlist',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const collection = db.collection('products');
        collection.find({}).toArray((err,data)=>{
            res.send(data);
        });
    });
}