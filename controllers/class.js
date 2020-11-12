<<<<<<< HEAD
const Class = require("../models/index");

module.exports = {
  index: (req, res) => {
    Class.find({})
      .populate("cards", "name")
      .exec(function(err, classes) {
        res.json(classes);
      });
  },
  getById: (req, res) => {
    Class.findOne({ _id: req.params.id })
      .populate("cards", "name")
      .exec(function(err, thisClass) {
        res.json(thisClass);
      });
  },
  getByName: (req, res) => {
    Class.findOne({ name: req.params.name })
      .populate("cards", "name")
      .exec(function(err, thisClass) {
        res.json(thisClass);
      });
  },
  showClass: (req, res) => {
    Class.findOne({ name: req.params.name })
      .populate("cards")
      .exec(function(err, thisClass) {
        res.render("class", { thisClass });
      });
  },
  create: (req, res) => {
    Class.create(req.body).then(classes => {
      res.json(classes);
    });
  },
  edit: (req, res) => {
    Class.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(thisClass => res.json(thisClass));
  },
  delete: (req, res) => {
    Class.findOneAndDelete({ name: req.params.name }).then(thisClass =>
      res.json(thisClass)
    );
  }
};
=======
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
>>>>>>> main
