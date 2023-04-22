const TaskModel = require('../models/TaskSchema')


module.exports.getAllTask = async(req, res, next) =>{
  TaskModel.find()
          .then(toDoModels => res.status(200).json(toDoModels))
          .catch(error => res.status(400).json({ error }));
}



module.exports.updateTask = async(req, res, next) =>{
  TaskModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'TaDo modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

module.exports.removeTask = async(req, res, next) =>{
  TaskModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'ToDo supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}


module.exports.createTask = async(req, res, next) =>{
    const task = new TaskModel({
     ...req.body      
    });

    task.save()
      .then(() => res.status(201).json({ message: 'toDo enregistré !'}))
      .catch(error => res.status(400).json({ error }))
}

module.exports.getOneTask = async(req, res, next) =>{
  TaskModel.findOne({ _id: req.params.id })
       .then(toDo => res.status(200).json(toDo))
       .catch(error => res.status(404).json({ error }));
}

