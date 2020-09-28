const db = require("../models");

module.exports = app => {

    // Get all books saved to the database
    app.get("/api/books", (req, res) => {
        db.Books.find({}, (err, response) => {
            if (err) {
                console.log(err)
            }
            res.json(response);
        })
    })

    // Save a new book to the database
    app.post("/api/books", (req, res) => {
        db.Books.create({
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        })
        .catch (err => {
            res.status(401).json(err)
        })
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Books.deleteOne({ _id: req.params.id }, (err, response) => {
            if (err) {
                console.log(err)
            }
        })
    })


    // * `*` (get) - Will load the single HTML page in `client/build/index.html`.
}
