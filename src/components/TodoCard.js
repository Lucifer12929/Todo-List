import React from "react";
import './TodoCard.css'
import { useState } from 'react';
import { Checkmark } from 'react-checkmark'


//functional component:-return task
function TodoCard(props) {
  const { list, index } = props;
  

  return (
    
    <div className={list.completed ?"card_comp":"card"} style={{ width: "20rem" }}>
      
      <div className="card-header">
        <h3 className="card-title">Task No:- {list.id} </h3>
        <div className={list.completed ?"checkin":"checkout"}>{list.completed ?<Checkmark size='medium'/>:""}</div>
        
      </div>
      <div className="card-body">
       
        
        <div className="df">
          
          <button
            className={list.completed ?"button_incomp":"button_comp"}
            
            onClick={() => props.complete(list.id)}> 
           {list.completed?"Mark as incomplete":"Mark as completed"}
          
          </button>
         
          <button
            className="button_del"
            onClick={() => props.delete(list.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
   
  );
}

export default TodoCard;
