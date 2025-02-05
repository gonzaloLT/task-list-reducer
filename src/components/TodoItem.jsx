import React from 'react'
import { TodoUpdate } from './TodoUpdate'
import { FaTrashCan } from "react-icons/fa6";

export const TodoItem = ({ todo, handleCompleteTodo, handleDeleteTodo, handleUpdateTodo }) => {
    return (
        <li>
            <span onClick={()=> handleCompleteTodo(todo.id)}>
                <label
                    className={`container-done ${todo.done ? 'active' : ''}`}>

                </label>
            </span>
            <TodoUpdate todo ={todo} handleUpdateTodo={handleUpdateTodo}  />
            <button className='btn-delete' onClick={()=>handleDeleteTodo(todo.id)}>
                <FaTrashCan />
            </button>
        </li>
    )
}
