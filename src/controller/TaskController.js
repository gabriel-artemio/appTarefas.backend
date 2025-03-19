const TaskModel = require('../model/TaskModel');

class TaskController{

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
};

module.exports = new TaskController();