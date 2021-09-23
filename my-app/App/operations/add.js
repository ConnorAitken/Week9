module.exports = function(db,app){
    var Product = require('../Product.js');
    // Route to manage adding a product
    app.post('/api/add',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const collection = db.collection('products');
        // Check for duplicate id's
        collection.find({'id':req.body.id}).count((err,count)=>{
            if (count == 0) {
                // If no duplicates
                newProduct = new Product.Product(req.body.id, req.body.name, req.body.description, req.body.price, req.body.units);
                collection.insertOne(newProduct,(err,dbres)=>{
                    if (err) throw err;
                    // Send back to client number of items inserted and no error msg
                    res.send({num:1,err:null});
                });
            }
            else {
                // On error send back error message
                res.send({num:0,err:"duplicate item"});
            }
        });
    });
}