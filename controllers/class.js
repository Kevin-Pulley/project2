<<<<<<< Billy
=======
// const Class = require("../models/class.js");
const classData = require("../db/classData");
const db = require("../models")
>>>>>>> Changes

const ClassData = require("../db/classData");
const db = require("../models");
let classController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showClass: (req, res) => {
       res.json()

    },
    getById: (req, res) => {
        res.json(req.params.id);
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    classSearch: (req, res) => {
        res.json(req.params.name);
    },
    create: (req, res) => {
        res.json(req.params.body);
    },
    edit: (req, res) => {
        res.json(req.params.body);
    },
    delete: (req, res) => {
        res.json(req.params.name);
    },
}

module.exports = classController;
