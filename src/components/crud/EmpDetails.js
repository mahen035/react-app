import React, { Fragment, useState } from 'react';
import Employees from './Employees';
import { useNavigate, Link } from 'react-router-dom';
import {nanoid} from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import './../crud/emp.css'
function EmpDetails(props) {

    let navigate = useNavigate();

    const[employees, setEmployees] = useState(Employees)

    const[editEmpId, setEditEmplId] = useState(null)

    const [addFormData, setAddFormData] = useState({
        name: '',
        age: ''
    })

    const[editEmpData, setEditEmpData] = useState({
        name:'',
        age:''
    })

    const handleAddFormChange=(e)=>{
        e.preventDefault();

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
   
    }

    const handleAddFormSubmit = (e)=>{
        e.preventDefault();
       // console.log("ADDING EMP...")
        const newEmp = {
            id:nanoid(),
            name:addFormData.name,
            age:addFormData.age
        }

        const newEmployees = [...employees, newEmp]
        setEmployees(newEmployees);
    }

    const handleEditClick = (e, emp) => {
        e.preventDefault();
        setEditEmplId(emp.id)

        const formValues = {
            name:emp.name,
            age: emp.age
        }
        setEditEmpData(formValues)
    }

    const handleEditChange = (e)=>{
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value

        const newFormData = {...editEmpData}
        newFormData[fieldName] = fieldValue

        setEditEmpData(newFormData)
    }

    const handleEditEmpSubmit = (e) => {
        e.preventDefault();

        const editedEmp = {
            id: editEmpId,
            name:editEmpData.name,
            age:editEmpData.age
        };
        const newEmp = [...employees]
        const index = employees.findIndex((emp)=>emp.id === editEmpId)
        newEmp[index] = editedEmp;
        setEmployees(newEmp);
        setEditEmplId(null)
    }
    // const handleDelete = (id)=>{
    //     let index = Employees.map(e=>e.id).indexOf(id);
    //     Employees.splice(index, 1)
    //     navigate('/')
    // }

    // const handleEdit = ((id, name, age) =>{
    //     localStorage.setItem('id', id)
    //     localStorage.setItem('name', name)
    //     localStorage.setItem('age', age)
    // })
    return (
        <div>
            <form onSubmit={handleEditEmpSubmit}>
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
                        employees.length > 0
                        ?
                        employees.map((emp)=>{
                            return(
                                <Fragment>
                                    { editEmpId === emp.id ? (
                                    <EditableRow editEmpData={editEmpData}
                                    handleEditChange = {handleEditChange}/>
                                    )
                                    : 
                                    (
                                    <ReadOnlyRow 
                                    emp = { emp }
                                    handleEditClick = {handleEditClick}/>
                                    ) }                  
                                </Fragment>
                                
                            )
                        })
                        :
                        'No Data Found'
                    }
                </tbody>
            </table>
            </form>
            <br/>
            <h2>Add Employee</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder='Enter Name'
                    onChange={handleAddFormChange}
                />  
                <input
                    type="number"
                    name="age"
                    required="required"
                    placeholder='Enter Age'
                    onChange={handleAddFormChange}
                />   
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}

export default EmpDetails;