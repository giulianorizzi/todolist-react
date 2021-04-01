import React from 'react';
import TodoService from '../../service/TodoService';

function Todo({ todo, folder, setEditTodo, updateTodoList }) {

    const eventoEditTodo = (todo) =>{
        setEditTodo(todo);
    }

    const eventoChangeTodoCompleted = (todo) =>{
        todo.folder = folder;
        todo.completed = !todo.completed;
        updateTodoList(todo);
        TodoService.update(todo);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <input 
                type="checkbox" 
                id={`check${todo.idTask}`}
                defaultChecked={todo.completed}
                onChange={ () => eventoChangeTodoCompleted(todo) }
            />
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