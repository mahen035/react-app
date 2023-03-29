const capAtTen = store=>next=>action =>{
    if(store.getState().count.counter >= 5){
        console.log('DECREMENT....')
        return next({type:'DECREMENT'})
    }
    next(action)
}

export default capAtTen;