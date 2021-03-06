import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'
export const TodoApp = () => {
    
   
    //para local storage
    const init = () => { return JSON.parse(localStorage.getItem("todos")) || [] }
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })

    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <header className="row">
                        <div className="col-12 text-center">
                            <h1>TodoApp ({todos.length})</h1>
                        </div>
                    </header>
                    <div className="row">
                        <div className="col-12 px-0">
                            <TodoList   todos={todos} 
                                        handleDelete={handleDelete}     
                                        handleToggle={handleToggle} />
                        </div>
                        <div className="col-12 p-2">
                                <TodoAdd handleAddTodo={handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
