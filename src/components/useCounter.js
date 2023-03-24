import React, { useState , useEffect } from 'react';

function useCounter(initializer, componentName) {
    const [ counter, setCounter ] = useState(initializer)

    function resetCounter(){
        setCounter(counter+1)
    }
    useEffect(()=>{
        console.log('Button of '+componentName+ ' is clicked '+counter+' times');
    }, [counter, componentName])
    return (
        resetCounter
    );
}

export default useCounter;