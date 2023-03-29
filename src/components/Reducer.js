import React, { useReducer } from 'react';

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    INPUTCHANGE: 'inputChange',
    TOGGLECOLOR: 'toggleColor'
}

const reducer = (state, action)=>{
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {...state, counter:state.counter+1};
        case ACTIONS.DECREMENT:
            return {...state, counter:state.counter-1};
        case ACTIONS.INPUTCHANGE:
            return {...state, inputVal:action.payload};
        case ACTIONS.TOGGLECOLOR:
            return {...state, color:!state.color}         
        case 'default':
            return state;
    }
}

function Reducer(props) {
    const[state, dispatch] = useReducer(reducer, {counter:0, inputVal:'', color:false})
    
    return (
        <div className='form-group' style={{color:state.color?'red':'black'}}>

            <input className='form-control'
              type="text"
              placeholder='Enter text'
              onChange={(e)=>dispatch({type:ACTIONS.INPUTCHANGE, payload:e.target.value})}
              /><br/><br/>

              
              <p>{state.inputVal}</p>
              <p>{state.counter}</p>
              <button 
                type='button' 
                className='btn btn-info'
                onClick={()=>dispatch({type:ACTIONS.INCREMENT})}>+</button> &nbsp;&nbsp;
              <button 
                type='button' 
                className='btn btn-info'
                onClick={()=>dispatch({type:ACTIONS.DECREMENT})}>-</button>
                <br/><br/>
                <button 
                type='button' 
                className='btn btn-dark'
                onClick={()=>dispatch({type:ACTIONS.TOGGLECOLOR})}>Toggle Color</button>  
            
        </div>
    );
}

export default Reducer;

// State : which holds all your component data
// Dispatch: will send the action to the reducer
// Action: is an object which will be passed to the reducer
// Reducer: Is a pure javascript function which will update the state
