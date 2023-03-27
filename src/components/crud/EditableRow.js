import React from 'react';
import { FaSave } from 'react-icons/fa'
const EditableRow = ({editEmpData, handleEditChange}) => {
    return (
        <tr>
            <td>
                <input  
                    type="text"
                    required="required"
                    name="name"
                    value = {editEmpData.name}
                    placeholder='Enter name'
                    onChange={handleEditChange}
                />    
            </td>
            <td>
                <input  
                    type="number"
                    required="required"
                    name="age"
                    value={editEmpData.age}
                    placeholder='Enter age'
                    onChange={handleEditChange}
                />    
            </td>
            <td>
                <button type="submit">
                    <FaSave />
                </button>
            </td>
         </tr>   
    );
};

export default EditableRow;