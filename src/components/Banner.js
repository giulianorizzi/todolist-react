import React from 'react'
import {Link} from 'react-router-dom';

const Banner = ({ folder }) => {
    return (
        <div className="h1 bg-dark text-white p-2">
            {folder ? <Link to={"/"}>Folders</Link> : 'Folders'} {folder ? `/ ${folder.name}` : ''} 
        </div>
    )
}

export default Banner
