import React from 'react';
import Todo from './Todo';

function TodoList({ todos, folder, setEditTodo }) {
    return (
        <ul className="list-group">
            {todos.map(todo=> (
                <Todo key={todo.name} todo={todo} folder={folder} setEditTodo={setEditTodo}/>
            ))}
        </ul>
    );
}

export default TodoList;