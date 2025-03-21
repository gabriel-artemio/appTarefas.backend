const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.get('/filter/byid/:id', TaskController.byId);
router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);
//quando chegar requisição no verbo post, primeiro vai ser executado o middleware e depois a função create
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.put('/:id/:done',TaskController.done);
router.delete('/:id',TaskController.delete);

module.exports = router;