const Product = require("../models/product.model");

module.exports.getAllProducts = (req, res) => {
    Product.find({})
    .then((allProducts) => {
    console.log(allProducts)
    res.json(allProducts)
    })
    .catch((err) => res.json(err));
};

module.exports.getProductById = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then((Product) => res.json(Product))
    .catch((err) => res.json(err));
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => res.status(200).json(newProduct))
    .catch((err) => res.status(400).json(err));
};

// module.exports.updateProduct = (req, res) => {
//     Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//     })
//     .then((updatedProduct) => res.json(updatedProduct))
//     .catch((err) => res.json(err));
// };

// module.exports.deleteProduct = (req, res) => {
//     Product.deleteOne({ _id: req.params.id })
//     .then((result) => res.json(result))
//     .catch((err) =>res.json(err));
// };

