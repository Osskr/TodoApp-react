import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({ description: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim() === '') {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

    return (

        <form className="form-inline"
            onSubmit={handleSubmit}>
            <div className="form-group my-2 w-75 mr-1 ">
                <input className="form-control px-4 w-100"
                    type="text"
                    name="description"
                    placeholder="Agregar una nueva tarea"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-success"
                type="submit">
                <svg width="4em" height="1.2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
            </button>
        </form>
    )
}
