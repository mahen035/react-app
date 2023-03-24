import React, {useState, useEffect, useRef} from 'react';

function Ref(props) {
    const[inputValue, setInputValue] = useState('')
    
    //const count = useRef(0);

    const previousInputValue = useRef('')

    useEffect(()=>{
            //console.log(count.current)
           // count.current = count.current + 1;
           previousInputValue.current = inputValue;
    })
    return (
        <div>
            <input
             type = "text"
             value = {inputValue}
             onChange = {(e) => setInputValue(e.target.value)} />
             <h3>Current Value: {inputValue}</h3>
             <h3>Previous Value: {previousInputValue.current}</h3>
             
        </div>
    );
}

export default Ref;