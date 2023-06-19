import React from 'react'
import {v4 as uuidV4} from "uuid";

const Form = ({input, setInput , items, setItems,  newPriority, setNewPriority}) => {
  
   
    
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };

    const onPriorityChange =(event) =>{
        setNewPriority(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        
        setItems([...items, {id:uuidV4(), title: input , priority: newPriority }]);
        setInput("");
        setNewPriority("low");
        
        
    };
  
    return (
    <form onSubmit={onFormSubmit} >
        <input type="text" placeholder='Enter a Wish' className='task-input' value={input} required onChange={onInputChange} />
        <select className='task-input' onChange={onPriorityChange} value={newPriority}>

       <option value="low">Low</option>

       <option value="medium">Medium</option>

       <option value="high">High</option>

     </select>
        
        <button className='button-add' type="submit">Add</button>
    </form>
  )
}

export default Form