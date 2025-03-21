const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

//quando chegar requisição no verbo post, primeiro vai ser executado o middleware e depois a função create
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;