import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FolderService from '../../service/FolderService';

function TodoContainer({ match }) {
    const [folder, setFolder] = useState({
        id_folder: 0, 
        name: ""
    });
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    function addTodo( todo ) {
        setTodos([todo, ...todos]);
    }

    function updateTodoList( todo ) {
        const todosAux = [...todos].map(t => {
        if (t.id_task === todo.id_task) {
            t = todo;
        }
        return t;
        });
        setTodos(todosAux);
    }

    useEffect(() => {  
        // TodoService.getAll().then(data => {
        //     if(data){
        //         setTodos(data);
        //     }
        // });
        FolderService.getByID( match.params.idFolder ).then(data => {
            if(data){
                setTodos(data.tasks);
                setFolder({
                    id_folder: data.id_folder, 
                    name: data.name
                });
            }
        });
    }, []);

    return (
        <div className="container mt-4 p-4 bg-light">
            <h1>{folder.name}</h1>
            <TodoForm addTodo={addTodo} folder={folder} editTodo={editTodo} setEditTodo={setEditTodo} updateTodoList={updateTodoList}/>
            <TodoList todos={todos} folder={folder} setEditTodo={setEditTodo}/>
        </div>
    );
}

export default TodoContainer;
