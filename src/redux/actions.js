import axios from "axios"

export const increment = ()=>{
    console.log('Action called...')
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}

export const getData = ()=>{
    return async(dispatch)=>{
        const response = await axios.get("http://13.233.64.79:8181/api/products");
        console.log(response.data)
        dispatch({
            type: "FETCH_DATA",
            payload: response.data
        })

    }
}