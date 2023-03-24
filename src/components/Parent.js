import React, { useState } from 'react';
import DynamicComponent from './DynamicComponent';
import { useNavigate } from 'react-router-dom';

function Parent(props) {
    const[user, setUser] = useState ("usera")
    const navigate = useNavigate();
    function handleClick(){
        navigate('/expense');
    }
    return (
        <div>
            <DynamicComponent user={user} />
            <button onClick={()=> setUser("usera")}>Switch to UserA</button><br/>
            <button onClick={()=> setUser("userb")}>Switch to UserB</button><br/>
            <button onClick={handleClick}>go home</button>
        </div>
    );
}

export default Parent;