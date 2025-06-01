const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("author");
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};

exports.createBooks = async (req, res) => {
    try {
        const { title, year, author } = req.body;
        const newBook = new Book({ title, year, author });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ error: "Failed to create book" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: "Failed to delete book" });
    }
};