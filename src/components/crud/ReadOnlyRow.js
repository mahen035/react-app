import React from 'react';

import { FaEdit } from 'react-icons/fa';

const ReadOnlyRow = ({emp, handleEditClick}) => {
    return (
        <tr key = {emp.id}>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>
                <button 
                    type="button"
                    onClick={(e)=>handleEditClick(e, emp)}>

                    <FaEdit />
                </button>
            </td>
        </tr>    
    );
};

export default ReadOnlyRow;