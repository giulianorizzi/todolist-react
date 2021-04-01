import React from 'react';

function Form({eventoSubmit, eventoCambiarInput, name, edit, error}) {
    return(
        <form onSubmit={eventoSubmit}>
            <div className="form-group d-flex justify-content-between">
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    className="form-control" 
                    placeholder="Enter the name" 
                    onChange={eventoCambiarInput}
                />
                <button type="submit" className="btn btn-success ml-2">
                    {edit ? 'Save' : 'Add'}
                </button>
            </div>
            {error.error ? <div className="alert alert-danger" role="alert">{error.message}</div> : ''}
        </form>
    );
}

export default Form;