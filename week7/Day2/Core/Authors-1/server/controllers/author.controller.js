const Author= require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
    .then((allAuthors) => {
    console.log(allAuthors)
    res.json(allAuthors)
    })
    .catch((err) => res.json(err));
};

module.exports.getAuthorById = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then((Author) => res.json(Author))
    .catch((err) => res.json(err));
};

module.exports.createNewAuthor= (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => res .status(200).json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor= (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedAuthor) => res .status(200).json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor= (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) =>res.json(err));
};

