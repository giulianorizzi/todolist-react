import React, {useState} from 'react';
import FolderService from '../../service/FolderService';
import Form from '../Form';

function FolderForm({ addFolder }) {

    const [folder, setFolder] = useState({
        idFolder: 0,
        name: ""
    })

    const [formError, setFormError] = useState({
        error: 0,
        message: ""
    })

    const eventoCambiarInput = (e) => {
        setFolder({ ...folder, name: e.target.value });
    }

    const eventoSubmit = (e) => {
        e.preventDefault();
        if(folder.name) {
            FolderService.post(folder).then(
                data => addFolder({...folder, idFolder: data.idFolder})
            );
            setFolder({...folder, name:""});
            setFormError({error:0, message:""});
        } else {
            setFormError({error:1, message:"Enter the Folder Name"});
        }
    }

    return(
        <Form 
            eventoSubmit={eventoSubmit} 
            eventoCambiarInput={eventoCambiarInput} 
            name={folder.name}
            error={formError}
        />
    );
}

export default FolderForm;