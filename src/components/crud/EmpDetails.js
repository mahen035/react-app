import React from 'react';
import Employees from './Employees';
import { useNavigate, Link } from 'react-router-dom';
import './../crud/emp.css'
function EmpDetails(props) {

    let navigate = useNavigate();
    const handleDelete = (id)=>{
        let index = Employees.map(e=>e.id).indexOf(id);
        Employees.splice(index, 1)
        navigate('/')
    }

    const handleEdit = ((id, name, age) =>{
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees.length > 0
                        ?
                        Employees.map((emp)=>{
                            return(
                                <tr key = {emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.age}</td>
                                    <td>
                                    <Link to = '/edit'>
                                        <button onClick={()=>handleEdit(emp.id, emp.name, emp.age)}>Edit</button>
                                    </Link>    
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDelete(emp.id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'No Data Found'
                    }
                </tbody>
            </table>
            <br/>
            <button>Add Employee</button>
        </div>
    );
}

export default EmpDetails;