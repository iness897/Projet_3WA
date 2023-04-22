import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ListTodoProgress = ({name, description, removeTask}) => {



    return (
        <div className="card-container">
            <div className = "card-line"></div>
            <div className = "task_bloc">
                <p className = "task_name">{name}</p>
                <p className = "task_description">{description}</p>

                <div className="container-icon">
                    <FontAwesomeIcon icon={faTrash} className='icon-delete' onClick={removeTask} />
                </div>
            </div>
        </div>
    );
};

export default ListTodoProgress; 
