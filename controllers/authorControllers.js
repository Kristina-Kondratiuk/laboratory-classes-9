const Author = require("../models/Author");

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch authors" });
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedAuthor);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to update author" });
    }
};