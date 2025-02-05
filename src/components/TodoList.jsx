import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleCompleteTodo, handleDeleteTodo, handleUpdateTodo}) => {
  return (
    <ul>
        {
            todos.map(todo => 
                <TodoItem 
                    key={todo.id}
                    todo = {todo}
                    handleCompleteTodo = {handleCompleteTodo}
                    handleDeleteTodo = {handleDeleteTodo}
                    handleUpdateTodo = {handleUpdateTodo}
                />
            )
        }
    </ul>
  )
}
