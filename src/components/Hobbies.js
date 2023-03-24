import React, { useState } from 'react';

function Hobbies(props) {
    const [hobbies, setHobbies] = useState([])

    const handleChange = (e) => {
        if(e.target.checked)
            setHobbies(arr => [...arr, e.target.value])
        else
            setHobbies(arr => arr.filter(val => val !== e.target.value))    
    }
    return (
        <div>
            <input
            type="checkbox"
            value='Sports'
            onChange={ handleChange } />Sports
            <br/>
            <input
            type="checkbox"
            value='Music'
            onChange={ handleChange } />Music
            <br/>
            <input
            type="checkbox"
            value='Travel'
            onChange={ handleChange } />Travel
            <br/>
            <input
            type="checkbox"
            value='Reading'
            onChange={ handleChange } />Reading
            <br/>
            HOBBIES: {hobbies.map(hobbie => '[ '+hobbie+' ]')}
        </div>
    );
}

export default Hobbies;