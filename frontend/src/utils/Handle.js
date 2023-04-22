import axios from 'axios'

const url = "http://localhost:3005"

const getAllTask = (setTasks) =>{
    axios
    .get(url)
    .then(({data}) =>{
        setTasks(data)
    })
}


const createTask = (name, setName, description, setDescription, setTasks) =>{
    axios
    .post(`${url}/`, {name, description})
    .then((data) =>{
        setName("")
        setDescription("")
        getAllTask(setTasks)
    })
    .catch((err) => console.log(err))
}

const updateTask = (toDoId, name, setName, description, setDescription, setTasks, setUpdate) =>{
    axios
    .put(`${url}/${toDoId}`, {_id : toDoId, name, description})
    .then((data) =>{
        setName("")
        setDescription("")
        setUpdate(false)
        getAllTask(setTasks)
    })
    .catch((err) => console.log(err))
}

const removeTask = (toDoId, setInprogress) =>{
    axios
    .delete(`${url}/${toDoId}`, {_id : toDoId})
    .then((data) =>{
        getAllTask(setInprogress)
    })
    .catch((err) => console.log(err))
}

export { getAllTask, createTask, updateTask, removeTask } 

