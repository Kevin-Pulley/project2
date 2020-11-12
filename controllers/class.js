
const Class = require("../models/class.js");

let classController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showClass: (req, res) => {
        res.json(req.params.name);
    },
    getById: (req, res) => {
        res.json(req.params.name);
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    classSearch: (req, res) => {
        res.json(req.params.name);
    },
    create: (req, res) => {
        res.json(req.params.name);
    },
    edit: (req, res) => {
        res.json(req.params.name);
    },
    delete: (req, res) => {
        res.json(req.params.name);
    },
}

module.exports = classController;
