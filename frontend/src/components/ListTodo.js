import './listTodo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSpinner, faArrowsRotate, faForward } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const ListTodo = ({name,description, updateForm, addToProgress}) => {

    const [progress, setProgress] = useState(0)

    //Progress Bar 
    const handleProgress = () =>{
        if(progress < 100){
            setProgress(progress + 20);
        }
        };

    const handleReset= () =>{
        setProgress(0)
    }


    const getColor = () =>{
        if(progress < 40){
            return "#ff0000"
        } else if(progress < 70){
            return "#ffa500"
        }else {
            return "#2ecc71"
        }
    }


    return (
        <div className="card-container">
            <div className = "card-line"></div>
            <div className = "task_bloc">
                <div className = "task_name">{name}</div>
                <div className = "task_description">{description}</div>

                <div className='progress-container'>
                    <div className='progressBar'>
                        <div className='progress-color' style={{ width: `${progress}%`, backgroundColor: getColor()}}>
                            <div className='progress-label'>{progress}%</div>
                        </div>
                    </div>
                    <div className='bloc-button'>
                        <button onClick={handleProgress}>
                            <FontAwesomeIcon icon={faForward} />
                        </button>
                        <button onClick={handleReset}>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </button>
                    </div>
                </div>



                <div className="container-icon">
                    <FontAwesomeIcon icon={faSpinner} className='icon-progress' onClick={addToProgress}/>
                    <FontAwesomeIcon icon={faPenToSquare} className='icon-edit' onClick={updateForm}/>

                </div>
            </div>
        </div>
    );
};

export default ListTodo; 
