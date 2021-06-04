import * as actionTypes from "./actions";
// We are setting the state to initalState.
const initialState={
    counter:0,
    result:[]
}
// In reducer we have to pass 2 parameters, first is initial state or old state and 2nd is action
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
                return{
                    ...state,
                     counter: state.counter+1
                }
        case actionTypes.DECREMENT:
                return{
                    ...state,
                     counter: state.counter-1
                }
        case actionTypes.ADD:
                return{
                    ...state,
                     counter: state.counter+ action.val
                }
        case actionTypes.SUBSTRACT:
                return{
                    ...state,
                     counter: state.counter- action.val
                }
        case actionTypes.STORE_RESULT:
                return{
                     ...state,
                     //Immutable way of updating the array
                     result: state.result.concat({ id: new Date(), val:state.counter})
                }
        case actionTypes.DELETE_RESULT:
                    // const id = 2;
                    // const newArray = [...state.result];
                    // newArray.splice(id, 1)
                    // Filter method create the new array of result
                    const updatedArray = state.result.filter( result => result.id !== action.resultElId);
                return{
                     ...state,
                     result: updatedArray
                     //Immutable way of updating the array
                     
                }
    }
    
    return state;
};
export default reducer;