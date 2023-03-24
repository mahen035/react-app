import React from 'react';

function Child2({setMessage}) {
    return (
        <div>
            <button onClick={() => setMessage('Message from Child2')}>Child2</button>
        </div>
    );
}

export default Child2;