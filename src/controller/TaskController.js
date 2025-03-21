const TaskModel = require('../model/TaskModel');
//armazenar a data e a hora atual para fazer comparações
const current = new Date();
const {
    startOfDay, endOfDay, 
    startOfWeek, endOfWeek, 
    startOfMonth, endOfMonth,
    startOfYear, endOfYear
} = require('date-fns');

class TaskController{

    async all(req, res){
        await TaskModel.find({macaddress : {'$in':req.params.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    }

    async byId(req, res){
        await TaskModel.findById(req.params.id)
        .then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error : 'tarefa não encontrada'});
        })
        .catch(error => {
            return res.status(400).json(error);
        });
    };

    async late(req, res){
        await TaskModel.find({
            'when':{'$lt': current},
            'macaddress': {'$in': req.params.macaddress}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async today(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfDay(current),'$lt':endOfDay(current)}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async week(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfWeek(current),'$lt':endOfWeek(current)}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async month(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfMonth(current),'$lt':endOfMonth(current)}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async year(req, res){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfYear(current),'$lt':endOfYear(current)}
        })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async create(req,res){
        const task = new TaskModel(req.body);
        await task
        //salvo o taskmodel no banco
        .save()
        //caso dê tudo certo, retorno o status 200 e a resposta em formato json
        .then(response => {
            return res.status(200).json(response);
        })
        //caso dê tudo errado, retorno o status 500 e o erro em formato json
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    async update(req,res){
        await TaskModel.findByIdAndUpdate({'_id' : req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    };

    async delete(req, res){
        await TaskModel.deleteOne({'_id':req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async done(req, res){
        await TaskModel.findByIdAndUpdate(
            {'_id':req.params.id},
            {'done': req.params.done},
            {new:true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
};

module.exports = new TaskController();