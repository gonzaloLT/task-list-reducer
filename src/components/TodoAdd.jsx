import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                className='input-add'
                name='description'
                value={description}
                onChange={onInputChange}
                placeholder='¿Que hay que hacer?'

            />
            <button className='btn-add' type='submit'>
                Agregar
            </button>
        </form>
    )
}
