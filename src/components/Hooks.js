import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function Hooks(){
    //const [color, setColor] = useState("Brown")
    const [ count, setCount ] = useState(0)
    const [ calculation, setCalculation ] = useState(0)
    // const [ car, setCar ] = useState({
    //     make: 'Ford',
    //     model: 'Mustang',
    //     year: 1990,
    //     color: 'red'
    // })

    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }

    useEffect(()=>{
        setCalculation(()=>count*2)
    } , [count])
    return(
        <div>
            <h1>Count: {count} </h1>
            <button onClick={()=> setCount(count+1)}>Add</button>
            <input type="text" name='cc' onChange={e=>console.log(e.target.value)}></input>
            <p>Calculation: {calculation}</p>

            <button onClick={handleClick}>Add</button>

            <Button>BS Button</Button>



            {/* <h2>My favorite color is {color}</h2>
            <button type="button" onClick={()=> setColor("White")}>change color</button><br /><br /> */}
            {/* 
            <button type="button" onClick={()=> setColor("White")}>change color</button><br /><br />
            <h3>My {car.make} car buit in {car.year} is of {car.color} color</h3>
            
            <button type="button" onClick={()=> setCar(myCar =>{
                return {...myCar, color:'blue'}})}>Update Car</button> */}
        </div>
    )
}

export default Hooks;