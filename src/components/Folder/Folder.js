import React from 'react';
import {Link} from 'react-router-dom';
import FolderService from '../../service/FolderService';

function Folder({ folder, deleteFolder }) {

    const urlParam = { 
        pathname: "/folder/"+folder.id_folder, 
        param1: folder 
    };

    function eventoDeleteFolder(id_folder){
        FolderService.delete(id_folder);
        deleteFolder(id_folder);
    }
    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
                {folder.name}
            </span>
            <Link to={urlParam}>
                <button type="button" className="btn btn-primary">
                    View Items
                </button>
            </Link>
            <button type="button" className="btn btn-danger" onClick={()=>eventoDeleteFolder(folder.id_folder)}>
                Delete
            </button>
        </li>
    );
}

export default Folder;