<<<<<<< HEAD
const Set = require("../models/deck");

module.exports = {
  index: (req, res) => {
    Set.find({})
      .populate("cards", "name")
      .exec(function(err, sets) {
        res.json(sets);
      });
  },
  getById: (req, res) => {
    Set.findOne({ _id: req.params.id })
      .populate("cards", "name")
      .exec(function(err, set) {
        res.json(set);
      });
  },
  getByName: (req, res) => {
    Set.findOne({ name: req.params.name })
      .populate("cards", "name")
      .exec(function(err, set) {
        res.json(set);
      });
  },
  showSet: (req, res) => {
    Set.findOne({ name: req.params.name })
      .populate("cards")
      .exec(function(err, thisSet) {
        res.render("deck", { thisSet });
      });
  },
  create: (req, res) => {
    Set.create(req.body).then(set => {
      res.json(set);
    });
  },
  edit: (req, res) => {
    Set.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(set => res.json(set));
  },
  delete: (req, res) => {
    Set.findOneAndDelete({ name: req.params.name }).then(set => res.json(set));
  }
};
=======
const Deck = require("../models/deck.js");

let classController = {
    index: (req, res) => {
        res.json(req.params.name);
    },
    showDeck: (req, res) => {
        res.json(req.params.name);
    },
    getById: (req, res) => {
        res.json(req.params.name);
    },
    getByName: (req, res) => {
        res.json(req.params.name);
    },
    deckSearch: (req, res) => {
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

module.exports = deckController;
>>>>>>> main
