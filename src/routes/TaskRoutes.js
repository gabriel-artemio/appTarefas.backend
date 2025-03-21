const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.get('/filter/byId/:id', TaskController.show);
router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/filter/late', MacaddressValidation, TaskController.late);
//quando chegar requisição no verbo post, primeiro vai ser executado o middleware e depois a função create
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.put('/:id/:done',TaskController.done);
router.delete('/:id',TaskController.delete);

module.exports = router;