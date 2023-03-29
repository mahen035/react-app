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