const express = require("express");
const router = express.Router();
const classController = require("../controllers/class");

<<<<<<< HEAD
<<<<<<< Billy
router.get("/showClass/:name", classController.showClass);
=======
router.get("api/class/showclass/:name", classController.showClass);
>>>>>>> Changes
=======
router.get("class/:name", classController.showClass);
>>>>>>> main
router.get("/", classController.index);
router.get("/api/class/:card_id", classController.getById);
router.get("/name/:name", classController.getByName);
router.post("/api/class/:card_id", classController.create);
router.put("/:name", classController.edit);
router.delete("/:name", classController.delete);

module.exports = router;
