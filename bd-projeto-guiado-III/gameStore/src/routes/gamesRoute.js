const controller = require('../controller/gamesController');
const express = require('express');
const router = express.Router();

router.get("/all", controller.findAllGames)
  .get("/:id", controller.findGameById)
  .post("/add", controller.addNewGame)
  .patch("/:id", controller.updateGame)
  .delete("/:id", controller.deleteGame);

module.exports = router