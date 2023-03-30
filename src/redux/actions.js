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
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        //console.log(response.data)
        dispatch({
            type: "FETCH_DATA",
            payload: response.data
        })

    }
}