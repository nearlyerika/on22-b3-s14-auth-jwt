const controller = require('../controller/consolesController');
const express = require('express');
const router = express.Router();

router.get('/all', controller.findAllConsoles)
  .get('/:id', controller.findConsoleById)
  .post('/add', controller.addNewConsole)
  .patch('/:id', controller.updateConsole)
  .delete('/:id', controller.deleteConsole);

module.exports = router;