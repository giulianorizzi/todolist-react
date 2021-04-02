import React from 'react';
import {Link} from 'react-router-dom';
import FolderService from '../../service/FolderService';

function Folder({ folder, deleteFolder }) {

    const urlParam = { 
        pathname: `/folder/${folder.idFolder}`
    };

    const eventoDeleteFolder = (idFolder) => {
        FolderService.delete(idFolder);
        deleteFolder(idFolder);
    }
    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <span>
                {folder.name}
            </span>
            <Link to={urlParam}>
                <button type="button" className="btn btn-primary">
                    View Items
                </button>
            </Link>
            <button type="button" className="btn btn-danger" onClick={()=>eventoDeleteFolder(folder.idFolder)}>
                Delete
            </button>
        </li>
    );
}

export default Folder;