import React from 'react';
import useCounter from './useCounter';
function FirstComponent(props) {
    const handleClick = useCounter(0, 'FirstComponent')
    return (
        <div>
            <h2>First Component</h2>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}

export default FirstComponent;