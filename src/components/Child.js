import React from 'react';

function Child({childToMain}) {
    const data = 'This data is passed from Child comp to the main comp'
    return (
        <div>
            <button onClick={() => childToMain(data)}>Click(Child)</button>
        </div>
    );
}

export default Child;