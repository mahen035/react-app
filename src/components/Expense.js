import React, {useEffect, useState} from 'react';

function Expense(props) {
    const [ budget, setBudget ] = useState(0)
    const [ expense, setExpense ] = useState(0)
    const [ remaining, setRemaining ] = useState(0)

    const calculate = (e) =>{
        if(e.target.name == 'budget'){
           // console.log(e.target.value)
            setBudget(e.target.value)
           
        }
        if(e.target.name == 'expense'){
            setExpense(e.target.value)
        }
    }

    useEffect(()=>{
        setRemaining(budget - expense)
    })

    return (
        <div>
            Budget: <input type = "text" name = 'budget' onChange={calculate} /> <br/>
            Expense: <input type = "text" name = 'expense' onChange={calculate} /> <br/>
            Remaining : {remaining}
        </div>
    );
}

export default Expense;