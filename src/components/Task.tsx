import React, { useState } from 'react';

export default function Task(prop: { name:string, estimated:number, completed:boolean, id:string, modalHandler:Function, roundsCompleted:number, completedHandler:Function, actual:number }) {

  return (
    <div className='task-list-item' id={prop.id}>
      <div
        onClick={() => prop.completedHandler(prop.id)}
        className={`material-icons icons ${
         prop.completed ? 'task-completed' : 'in-progress'
        }`}>
        check_circle_outline
      </div>
      <span>{ prop.name }</span>
      <span>
        { prop.actual }
        /
        { prop.estimated }
      </span>
      <span>{prop.completed ? 'Completed' : 'In progress'}</span>
      {/* <span 
        onClick={() => modalHandler('edit', id)} 
        className='material-icons'>
        menu_open
      </span> */}
    </div>
  );
}