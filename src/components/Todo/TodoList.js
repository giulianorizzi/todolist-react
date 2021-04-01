import React from 'react';
import Todo from './Todo';

function TodoList({ todos, folder, setEditTodo, updateTodoList }) {
    return (
        
        <ul className="list-group">
            {todos.map(todo=> (
                <Todo key={todo.idTask} todo={todo} folder={folder} setEditTodo={setEditTodo} updateTodoList={updateTodoList}/>
            ))}
        </ul>
    );
}

export default TodoList;