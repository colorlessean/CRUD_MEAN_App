var Product = require('../models/product.model');

module.exports = {
    test: function(req, res){
        res.send('Test controller')
    },
    product_create: function(req, res, next){
        var product = new Product({
            name: req.body.name,
            price: req.body.price
        });
        product.save(function (err){
            if(err){
                return next(err);
            }
            res.send('Product Created Successfully');
        });
    },
    product_details: function(req, res, next){
        Product.findById(req.params.id, function(err, product){
            if (err) {
                return next(err);
            }
            res.send(product);
        });
    },
    product_update: function(req, res, next){
        Product.findByIdAndUpdate(req.params.id, {$set: req.body}, 
        function(err, product){
            if (err) {
                return next(err);
            }
            res.send('Product updated.');
        });
    },
    product_delete: function(req, res, next){
        Product.findByIdAndRemove(req.params.id, function(err){
            if (err){
                return next(err);
            }
            res.send('Deleted Succesfully');
        })
    }    
};