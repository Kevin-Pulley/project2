const express = require("express");
const router = express.Router();
const cardController = require("../controllers/card.js");

router.get("/api/cards/:name", cardController.showCard);
router.get("/", cardController.index);
router.get("/api/id/:id", cardController.getById);
router.get("/api/name/:name", cardController.getByName);
router.post("/api/card", cardController.create);
router.put("/:name", cardController.edit);
router.delete("/:name", cardController.delete);
router.post("/api/cards/cardsearch", cardController.cardSearch);

module.exports = router;