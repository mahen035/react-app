import React, {useEffect, useState} from 'react';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function EditEmployee(props) {
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    const[id, setId] = useState('')
    let index = Employees.findIndex(val=>val.id==id)
    let navigate = useNavigate();
    
    const handleClick = (e) => {
        console.log('EDITING..')
        console.log(index)
        e.preventDefault();
        let emp = Employees[index];
        emp.name = name;
        emp.age = age;
        navigate('/')
    }

    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
    },[])
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder='Enter Name'
                    value = {name}
                    onChange = {(e)=>setName(e.target.value)}/>
                    <br/><br/>
                <input
                    type="number"
                    placeholder='Enter Age'
                    value = {age}
                    onChange = {(e)=>setAge(e.target.value)}/> 
                    <br/><br/>
                    <button onClick={(e) => handleClick(e)} type="submit">Update</button>   
            </form>
        </div>
    );
}

export default EditEmployee;