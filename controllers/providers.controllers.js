const Product = require('../models/products.model');

app.get("/provides", function (req, res) {
    Provider.find({}, function (err, libros) {
      res.status(200).send(providers);
    });
  });

  module.exports = {
    
}