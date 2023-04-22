import React, {useEffect, useState} from 'react'
import ListTodo from './ListTodo';
import ListTodoProgress from './ListTodoProgress';
import { getAllTask, createTask, updateTask, removeTask } from '../utils/Handle';
import { Button } from 'reactstrap';
import background from '../image/background.jpg'



const CreateTodo = () => {

    const [tasks, setTasks] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [toDoId, setToDoId] = useState("");
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [update, setUpdate] = useState(false);
    const [isCompletedScreen, setIsCompletedScreen] = useState (false);

    useEffect(() =>{
        getAllTask(setTasks)
        // getAllProgress(setInprogress)
    }, [])
  
    const updateForm = (_id, name, description) =>{
      setUpdate(true)
      setName(name)
      setDescription(description)
      setToDoId(_id)
    }

    const addToProgress = (_id) => {
      const item = tasks.find(x => x._id === _id);
      setInprogress([item, ...inprogress]);
      const filterarray = tasks.filter(x => x._id !== _id);
      setTasks(filterarray);
    }

  return (
    <>
    <div className='container_create text-center' style={{backgroundImage: `url(${background})`}} >
        <h3>My To-Do List</h3>
        <div className="form">
            <input type='text' placeholder='Ajouter une tache' value={name} onChange = {(e) => setName(e.target.value)}/>

            <textarea className="form-control" placeholder='Ajouter une description' id="exampleFormControlTextarea1" rows="3" value={description} onChange = {(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className='container_button'>
          <Button
            onClick={ update ?  ()=> updateTask(toDoId, name, setName, description, setDescription, setTasks, setUpdate) 
              : () => createTask(name,setName, description, setDescription, setTasks)}>

              {update ? "Modify" : "Create"}
          </Button>
        </div>
    </div>

    <div className='container_task'>
        <div className="btn-area">
            <button
                className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
                onClick={() => setIsCompletedScreen (false)}
              >
                To Do
            </button>
            <button
                className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
                onClick={() => setIsCompletedScreen (true)}
              >
                Completed
            </button>
        </div>

        {isCompletedScreen === false &&
            <div className="list">

            { tasks && tasks.map((item, index) =>
                  <ListTodo
                    key={item._id} 
                    name={item.name}
                    description={item.description}
                    updateForm={() => updateForm(item._id, item.name, item.description)}
                    addToProgress={() =>addToProgress(item._id)}
                  />
            )}
          </div>

        }


          {isCompletedScreen === true &&
            <div className="list">
              {inprogress && inprogress.map((item, index) =>
              
                    <ListTodoProgress
                      key={item._id} 
                      name={item.name}
                      description={item.description}
                      removeTask={() => removeTask(item._id, setInprogress)}
                    />

                )}
            </div>
                      
          }

    </div>



    </>

  )
}



export default CreateTodo; 

