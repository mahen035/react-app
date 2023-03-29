const initialState = {
    color:''
}

const colorReducer=(state = initialState, action)=>{
    const newState = {...state}
    switch(action.type){
        case 'CHANGECOLOR':
            newState.color=action.payload
            return newState;
        default:
            return state;    
    }
}

export default colorReducer;