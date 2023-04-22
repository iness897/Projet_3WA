import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTodo = ({modal, toggle, update, task}) => {

    const [nameTask, setNameTask] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        if(name === "nameTask"){
            setNameTask(value)
        }else{
            setDescription(value)
        }

    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        let newTask = {}
        newTask['Name'] = nameTask
        newTask['Description'] = description
        update(newTask); 
    }


  return (
    <Modal isOpen={modal}>
        <ModalHeader>Modifier une tâche</ModalHeader>
        <ModalBody>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Nom de la tâche</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={nameTask} name="nameTask" onChange = {handleChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} name="description" onChange = {handleChange}></textarea>
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Modifer</Button>
            <Button color="secondary" onClick={toggle}>Supprimer</Button>
        </ModalFooter>
  </Modal>
  )
}

export default EditTodo