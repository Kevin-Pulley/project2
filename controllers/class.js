
// const Class = require("../models/class.js");

const ClassData = require("../db/classData");
const db = require("../models");
let classController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showClass: (req, res) => {
     
       res.json(req.params.name)

    },
    getById: (req, res) => {
        db.Class.get({
            card_id: req.body.card_id,
            name: req.body.name
        });
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    classSearch: (req, res) => {
        res.json(req.params.name);
    },
    create: (req, res) => {
        db.Class.create({
            card_id: req.body.card_id,
            name: req.body.name
        })
    },
    edit: (req, res) => {
        res.json(req.params.body);
    },
    delete: (req, res) => {
        res.json(req.params.name);
    },
}

module.exports = classController;
