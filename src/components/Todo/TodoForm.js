import React, {useEffect, useState} from 'react';
import TodoService from '../../service/TodoService';
import Form from '../Form';

function TodoForm({ addTodo, folder, setEditTodo, editTodo, updateTodoList }) {

    const [todo, setTodo] = useState({
        idTask: 0,
        name: "",
        completed: false
    })

    useEffect(()=>{
        if(editTodo){
            setTodo(editTodo);
        } else {
            setTodo({
                idTask: 0,
                name: "",
                completed: false
            })
        }
    }, [editTodo])

    const eventoCambiarInput = (e) => {
        setTodo({ ...todo, name: e.target.value });
    }

    const eventoSubmit = (e) => {
        e.preventDefault();
        todo.folder = folder;
        if(todo.name && !editTodo) {
            TodoService.post(todo).then(
                data => addTodo({...todo, idTask: data.idTask})
            );
            setTodo({...todo, name:""});
        } else {
            TodoService.update(todo);
            updateTodoList(todo);
            setEditTodo("");
        }
    }

    return(
        <Form 
            eventoSubmit={eventoSubmit} 
            eventoCambiarInput={eventoCambiarInput} 
            name={todo.name}
            edit={editTodo}
        />
    );
}

export default TodoForm;