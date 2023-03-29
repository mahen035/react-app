const initialState = {
    counter:0
}
const counterReducer = (state=initialState, action) =>{
    const newState = {...state}
    console.log('Reducer called...')
    switch(action.type){
        case 'INCREMENT':
            newState.counter=newState.counter+1
            return newState
        case 'DECREMENT':
            newState.counter=newState.counter-1
            return newState
        default:
            return state        
    }
}

export default counterReducer;