const controller = require('../controller/colaboradorasController')
const express = require('express')
const router = express.Router()

router
  .post('/colaboradoras', controller.create)
  .get('/colaboradoras', controller.getAll)
  .post('/colaboradoras/login', controller.login)
  .delete('/colaboradoras/:id', controller.deleteByID);

module.exports = router