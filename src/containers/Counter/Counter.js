import React, { Component } from 'react';
//connect - Function which return higher order functions
import {connect} from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// Importing the identifier we can give any name actionTypes or etc.
import * as actionTypes from "../Store/actions";
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }         

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncreamentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.storeResults.map(strResults =>(
                         <li key = {strResults.id} onClick={()=>this.props.onDeleteResult(strResults.id)}>{strResults.val}</li>
                    ))}
                   
                </ul>
            </div>
        );
    }
}
// below code for How the state managed by redux provided to counter
// ctr will get the state from redux
const mapStateToProps = state=>{
    return {
        ctr: state.counter,
        storeResults: state.result
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onIncreamentCounter:() => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter:() => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter:() => dispatch({type: actionTypes.ADD, val:10}),
        onSubtractCounter:() => dispatch({type: actionTypes.SUBSTRACT, val:15}),
        onStoreResult:()=> dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult:(id)=> dispatch({type: actionTypes.DELETE_RESULT, resultElId:id})
    }
}
// TOoconnect the redux to component bind it using a connect function.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);