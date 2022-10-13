import React from 'react'
import { useTodo } from '../../contexts/TodoContext'

const Item = ({todo}) => {
  const {clearTodo,toggleTodo}=useTodo();

  const onChange=(id)=>{toggleTodo(id);}
  const clearItem=(id)=>{clearTodo(id);}


  return (
    <li key={todo.id} className={todo.completed ?"completed":""}>
    <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>
        <label>{todo.text}</label>
        <button className="destroy" onClick={()=>clearItem(todo.id)}></button>
    </div>
</li>
  )
}

export default Item
