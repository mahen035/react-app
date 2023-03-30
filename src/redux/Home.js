import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement } from './actions';
import { useDispatch } from 'react-redux';
import { getData } from './actions';

function Home(props) {
    console.log('State is getting accessed..')
    const state = useSelector(state=>state)
    //console.log(state)
    const dispatch = useDispatch();
    return (
        <div className='App'>
            <h2>counter:{state.count.counter}</h2>
            <button onClick={()=>dispatch(increment())}>Add</button>
            <hr/>
            <input 
                type="radio"
                name="color" 
                value="Red"
                onClick={(e)=>dispatch({type:'CHANGECOLOR', payload:e.target.value})}/>RED&nbsp;
             <input 
                type="radio"
                name="color" 
                value="Blue"
                onClick={(e)=>dispatch({type:'CHANGECOLOR', payload:e.target.value})}/>BLUE&nbsp;
             <input 
                type="radio"
                name="color" 
                value="Green"
                onClick={(e)=>dispatch({type:'CHANGECOLOR', payload:e.target.value})}/>GREEN&nbsp;        
            <p>My favorite color is: {state.favColor.color}</p>
            <hr/>
            <button onClick={()=>dispatch(getData())}>Get Data</button>    
                
                
        </div>
    );
}

export default Home;