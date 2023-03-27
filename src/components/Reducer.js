import React, { useState, useReducer } from 'react';

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state, counter:state.counter+1};
        case 'decrement':
            return {...state, counter:state.counter-1};
        case 'inputChange':
            return {...state, inputVal:action.payload}     
        case 'default':
            return state;
    }
}

function Reducer(props) {
    //const[inputVal, setInputVal] = useState('');
    //const[counter, setCounter] = useState(0)
    const[state, dispatch] = useReducer(reducer, {counter:0, inputVal:''})
    const[color, setColor] = useState(false)

    return (
        <div className='form-group' style={{color:color?'red':'black'}}>

            <input className='form-control'
              type="text"
              placeholder='Enter text'
              onChange={(e)=>dispatch({type:'inputChange', payload:e.target.value})}
              /><br/><br/>
              <p>{state.inputVal}</p>
              <p>{state.counter}</p>
              <button 
                type='button' 
                className='btn btn-info'
                onClick={()=>dispatch({type:'increment'})}>+</button> &nbsp;&nbsp;
              <button 
                type='button' 
                className='btn btn-info'
                onClick={()=>dispatch({type:'decrement'})}>-</button>
                <br/><br/>
                <button 
                type='button' 
                className='btn btn-dark'
                onClick={()=>setColor(!color)}>Toggle Color</button>  
            
        </div>
    );
}

export default Reducer;

// State : which holds all your component data
// Dispatch: will send the action to the reducer
// Action: is an object which will be passed to the reducer
// Reducer: Is a pure javascript function which will update the state
