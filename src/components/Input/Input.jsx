import React from 'react';
import {connect} from 'react-redux'
import './input.css';
import {addTodo} from '../../context/Action'

 const Input = (props) => {
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            let task = e.target.userInput.value;
            //  console.log(task);
            props.dispatch(addTodo(task));
           }}
           autoComplete = "off"
        > 
        <input type ='text' name ='userInput' placeholder="Task" />
        <button className ="addTask">Add Task</button>
            
        </form>
    )
}
export default connect ()(Input);
