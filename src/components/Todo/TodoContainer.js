import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FolderService from '../../service/FolderService';
import {Link} from 'react-router-dom';

function TodoContainer({ match }) {
    const [folder, setFolder] = useState({
        idFolder: 0, 
        name: ""
    });
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const addTodo = ( todo ) => {
        setTodos([todo, ...todos]);
    }

    const updateTodoList = ( todo ) => {
        const todosAux = [...todos].map(t => {
            if (t.idTask === todo.idTask) {
                t = todo;
            }
            return t;
        });
        setTodos(todosAux);
    }

    useEffect( () => {
        const getTodos = () => {
            FolderService.getByID( match.params.idFolder ).then(data => {
                if(data){
                    if(data.tasks) {
                        setTodos(data.tasks);
                    }
                    setFolder({
                        idFolder: data.idFolder, 
                        name: data.name
                    });
                }
            });
        }
        
        getTodos();
    }, [match.params.idFolder]);
    

    return (
        <div className="container mt-4 p-4 bg-light">
            <div className="h1 bg-dark text-white p-2">
                <Link to={"/"}>Folders</Link> / {folder.name}
            </div>
            <hr />
            <TodoForm addTodo={addTodo} folder={folder} editTodo={editTodo} setEditTodo={setEditTodo} updateTodoList={updateTodoList}/>
            <TodoList todos={todos} folder={folder} setEditTodo={setEditTodo} updateTodoList={updateTodoList}/>
        </div>
    );
}

export default TodoContainer;
