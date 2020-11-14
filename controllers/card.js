
//const Card = require("../models/card.js");

// const card = require("../models/card.js");
// const Card = require("../models/card.js");
const db = require("../models")
let cardController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showCard: (req, res) => {
        res.json(req.params.name);
    },
    getById: (req, res) => {
        res.json(req.params.name);
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    cardSearch: (req, res) => {
        console.log("from cardsearch controller function")
        res.json(req.params.name);
    },
    create: (req, res) => {
        console.log(req.body)
        db.Cards.create({
            image_url : req.body.image_url,
            api_url: "test",
            name: "req.body.name"
        })
    },
    edit: (req, res) => {
        res.json(req.params.name);
    },
    delete: (req, res) => {
        res.json(req.params.name);
    },
}

module.exports = cardController;

