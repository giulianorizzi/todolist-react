import React, {useState} from 'react';
import FolderService from '../../service/FolderService';
import Form from '../Form';

function FolderForm({ addFolder }) {

    const [folder, setFolder] = useState({
        id_folder: 0,
        name: ""
    })

    const eventoCambiarInput = (e) => {
        setFolder({ ...folder, name: e.target.value });
    }

    const eventoSubmit = (e) => {
        e.preventDefault();
        if(folder.name ) {
            FolderService.post(folder).then(
                data => addFolder({...folder, id_folder: data.id_folder})
            );
            setFolder({...folder, name:""});
        }
    }

    return(
        <Form 
            eventoSubmit={eventoSubmit} 
            eventoCambiarInput={eventoCambiarInput} 
            name={folder.name}
        />
    );
}

export default FolderForm;