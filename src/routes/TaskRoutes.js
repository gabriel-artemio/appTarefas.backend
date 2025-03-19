const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

//quando chegar requisição no verbo post, primeiro vai ser executado o middleware e depois a função create
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);

module.exports = router;