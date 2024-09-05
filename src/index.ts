import store  from  './store'


let unsubscribe = store.subscribe(()=>{
    console.log(`This is the current state`,store.getState())
})


store.dispatch({type: 'todos/todoAdded', payload: 'todoText'}
)

store.dispatch({type: 'todos/todoToggled', payload: 1}
)

unsubscribe();