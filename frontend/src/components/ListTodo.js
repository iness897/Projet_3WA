import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

const ListTodo = ({name, description, updateForm, addToProgress}) => {



    return (
        <div className="card-container">
            <div className = "card-line"></div>
            <div className = "task_bloc">
                <p className = "task_name">{name}</p>
                <p className = "task_description">{description}</p>

                <div className="container-icon">
                    <FontAwesomeIcon icon={faCheck} className='icon-check' onClick={addToProgress}/>
                    <FontAwesomeIcon icon={faPenToSquare} className='icon-edit' onClick={updateForm}/>

                </div>
            </div>
        </div>
    );
};

export default ListTodo; 
