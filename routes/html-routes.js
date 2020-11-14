// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
let path = require("path");
let classes = require("../db/classData.js")
// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index", classes);
  });

  // card route loads card.handlebars
  app.get("/card", function(req, res) {
    res.render(path.join(__dirname, "../views/card.handlebars"));
  });

  // class route loads class.handlebars
  app.get("/class", function(req, res) {
    res.render(path.join(__dirname, "../views/class.handlebars"));
  });

  // deck route loads deck.handlebars
  app.get("/deck", function(req, res) {
    res.render(path.join(__dirname, "../views/deck.handlebars"));
  });

};
