// Requiring Dependencies 
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
let db = require("./models");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);

let cardsRoutes = require("./routes/cards.js");
app.use(cardsRoutes);
let classRoutes = require("./routes/class.js");
app.use(classRoutes);
let decksRoutes = require("./routes/decks.js");
app.use(decksRoutes);

// app.use("/api/cards/", cardRoute);
// app.use("/api/sets", setRoute);
// app.use("/api/classes", classRoute);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});