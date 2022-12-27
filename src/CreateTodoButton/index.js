import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClicklButton = () =>{
        props.setOpenModal(true);
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClicklButton}
            >+</button>
    );
}
export { CreateTodoButton};