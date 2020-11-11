// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  });

  // card route loads card.handlebars
  app.get("/card", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/card.handlebars"));
  });

  // class route loads class.handlebars
  app.get("/class", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/class.handlebars"));
  });

  // deck route loads deck.handlebars
  app.get("/deck", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/deck.handlebars"));
  });

};
