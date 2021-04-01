import React from 'react';
import TodoService from '../../service/TodoService';

function Todo({ todo, folder, setEditTodo }) {

    const eventoEditTodo = (todo) =>{
        setEditTodo(todo);
    }

    const changeTodoStatus = (todo) =>{
        todo.folder = folder;
        todo.status = !todo.status;
        TodoService.update(todo);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <input 
                type="checkbox" 
                id={`check${todo.id_task}`}
                defaultChecked={todo.status}
                onChange={ () => changeTodoStatus(todo) }/>
            <span>
                {todo.name}
            </span>
            <button type="button" className="btn btn-primary" onClick={() => eventoEditTodo(todo)}>
                Edit
            </button>
        </li>
    );
}

export default Todo;