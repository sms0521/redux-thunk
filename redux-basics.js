const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter:0
}
//Reducer
const rootReducer = (state= intialState ,action) => {
    if('INC_COUNTER' == action.type){
        return {...state, counter: state.counter+1}
    }
    if('ADD_COUNTER' == action.type){
        return {...state, counter: state.counter+action.value}
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(()=>{
    console.log('[subscribtion]', store.getState());
})

//Dispaching Action
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})
console.log(store.getState());

