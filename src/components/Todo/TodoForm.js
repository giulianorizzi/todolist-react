import React, {useEffect, useState} from 'react';
import TodoService from '../../service/TodoService';
import Form from '../Form';

function TodoForm({ addTodo, folder, setEditTodo, editTodo, updateTodoList }) {

    const [todo, setTodo] = useState({
        idTask: 0,
        name: "",
        completed: false
    })

    const [formError, setFormError] = useState({
        error: 0,
        message: ""
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
        if(todo.name){
            if(!editTodo) {
                TodoService.post(todo).then(
                    data => addTodo({...todo, idTask: data.idTask})
                );
                setTodo({...todo, name:""});
            } else {
                TodoService.update(todo);
                updateTodoList(todo);
                setEditTodo("");
            }
            setFormError({error:0, message:""});
        } else {
            setFormError({error:1, message:"Enter the Task Name"});
        }
    }

    return(
        <Form 
            eventoSubmit={eventoSubmit} 
            eventoCambiarInput={eventoCambiarInput} 
            name={todo.name}
            edit={editTodo}
            error={formError}
        />
    );
}

export default TodoForm;