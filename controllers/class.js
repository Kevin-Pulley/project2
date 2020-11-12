const Class = require("../models/class.js");

let classController = {
    index: (req, res) => {
        res.json(req.params.class);
    },
    showClass: (req, res) => {
        res.json(req.params.class);
    },
    getById: (req, res) => {
        res.json(req.params.class);
    },
    getByName: (req, res) => {
        res.json(req.params.class);
    },
    create: (req, res) => {
        res.json(req.params.class);
    },
    edit: (req, res) => {
        res.json(req.params.class);
    },
    delete: (req, res) => {
        res.json(req.params.class);
    },
}

module.exports = classController;
