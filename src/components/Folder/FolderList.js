import React from 'react';
import Folder from './Folder';

function FolderList({ folders, deleteFolder }) {
    return (
        <ul className="list-group">
            {folders.map(folder=> (
                <Folder key={folder.name} folder={folder} deleteFolder={deleteFolder}/>
            ))}
        </ul>
    );
}

export default FolderList;