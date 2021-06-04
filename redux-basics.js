// Lika a Node JS structure.
const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
    counter:0
}
//Reducer
// May update the state in the end.
// Receive two args (state, action) which returns old state.
const rootReducer = (state=initialState, action)=>{
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter:state.counter+1
        };
    }
    if(action.type==='ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter+10
        }
    }
    return state;
}
//Store
const store = createStore(rootReducer);
console.log(store.getState(), "[store]");

//Subscription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState());
})

//Dispatching Action
// type is a unique identifier // all uppper case.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:10});
console.log(store.getState());

