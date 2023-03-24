import React from 'react';
import useCounter from './useCounter';
function SecondComponent(props) {
    const handleClick = useCounter(0, 'SecondComponent');
    return (
        <div>
            <h2>Second Component</h2>
            <button onClick={handleClick}>click here</button>
        </div>
    );
}

export default SecondComponent;