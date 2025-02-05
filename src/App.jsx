import React from 'react'
import './App.css'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { useTodo } from './hooks/useTodo'

function App() {
	const { todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo } = useTodo();

	return (
		<>
			<div className="card-to-do">
				<h1>Lista de tareas</h1>
				<div className="counter-todos">
					<h3>N° de tareas: <span>{todosCount}</span> </h3>
					<h3>N° de pendientes: <span>{pendingTodosCount}</span> </h3>
				</div>

				<div className="add-todo">
					<TodoAdd handleNewTodo={handleNewTodo}/>
				</div>

				<TodoList 
					todos={todos}
					handleCompleteTodo={handleCompleteTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleUpdateTodo={handleUpdateTodo}
				/>
			</div>
		</>
	)
}

export default App
