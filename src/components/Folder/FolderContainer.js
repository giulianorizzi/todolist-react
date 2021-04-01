import React, {useState, useEffect} from 'react';
import FolderService from '../../service/FolderService';
import FolderList from './FolderList';
import FolderForm from './FolderForm';

function FolderContainer() {
    const [folders, setFolders] = useState([]);

    function addFolder( folder ) {
        setFolders([folder, ...folders]);
    }

    function deleteFolder(id) {
        setFolders(folders.filter(folder => folder.id_folder !== id));
    }

    useEffect(() => {  
        FolderService.getAll().then(data => {
            if(data){
                setFolders(data);
            }
        });
    }, []);

    return (
        <div className="container mt-4 p-4 bg-light">
            <h1>Folders</h1>
            <FolderForm addFolder={addFolder}/>
            <FolderList folders={folders} deleteFolder={deleteFolder}/>
        </div>
    );
}

export default FolderContainer;
