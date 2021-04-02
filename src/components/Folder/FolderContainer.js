import React, {useState, useEffect} from 'react';
import FolderService from '../../service/FolderService';
import FolderList from './FolderList';
import FolderForm from './FolderForm';
import Banner from '../Banner';

function FolderContainer() {
    const [folders, setFolders] = useState([]);

    const addFolder = ( folder ) => {
        setFolders([folder, ...folders]);
    }

    const deleteFolder = (id) => {
        setFolders(folders.filter(folder => folder.idFolder !== id));
    }

    useEffect(() => {
        const getFolders = () => {
            FolderService.getAll().then(data => {
                if(data){
                    setFolders(data);
                }
            });
        }
        
        getFolders();
    }, []);

    return (
        <div className="container mt-4 p-4 bg-light">
            <Banner />
            <hr />
            <FolderForm addFolder={addFolder}/>
            <FolderList folders={folders} deleteFolder={deleteFolder}/>
        </div>
    );
}

export default FolderContainer;
