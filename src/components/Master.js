import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
function Master(props) {
    const[message , setMessage] = useState('empty')
    return (
        <div>
            <Child1 message = {message}/>
            <Child2 setMessage = {setMessage}/>
        </div>
    );
}

export default Master;