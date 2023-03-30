import React, {useState} from 'react';

function Counter(props) {
    const[counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }
    return (
        <div>
            <h3 data-testId="counter">{counter}</h3>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
        </div>
    );
}

export default Counter;