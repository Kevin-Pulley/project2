<<<<<<< HEAD
<<<<<<< Billy
=======
// const Class = require("../models/class.js");
const classData = require("../db/classData");
const db = require("../models")
>>>>>>> Changes
=======
// const Class = require("../models/class.js");
const classData = require("../db/classData");
const db = require("../models")
>>>>>>> main

const ClassData = require("../db/classData");
const db = require("../models");
let classController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showClass: (req, res) => {
<<<<<<< HEAD
       res.json()
=======
       res.json(req.params.name)
>>>>>>> main

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
