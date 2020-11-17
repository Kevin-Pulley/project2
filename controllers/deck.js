const Deck = require("../models/deck.js");
const db = require("../models/index.js");

let deckController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showDeck: (req, res) => {
        res.json(req.params.name);
    },
    getById: (req, res) => {
        res.json(req.params.id);
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    deckSearch: (req, res) => {
        res.json(req.params.name);
    },
    create: (req, res) => {
       db.Decks.create({
           name:"test",
           image_url: req.body.image_url
       })
    },
    edit: (req, res) => {
        res.json(req.params.body);
    },
    delete: (req, res) => {
        res.json(req.params.name);
    },
}

module.exports = deckController;
