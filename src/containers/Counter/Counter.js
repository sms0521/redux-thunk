import React, { Component } from 'react';

import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/action/index'

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
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <hr/>
                <button onClick={()=> this.props.storeResult(this.props.ctr)}>Save Results</button>

                <ul>
                    {this.props.results.map( result => <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.resultval} </li>)}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results : state.res.results
    };
};

const mapDispatchToProps = dispacher => {
    return {
        onIncrementCounter: ()=> dispacher(actionCreators.increment()),
        onDecrementCounter: ()=> dispacher(actionCreators.decrement()),
        onAddCounter: ()=> dispacher(actionCreators.add(5)),
        onSubstractCounter: ()=> dispacher(actionCreators.substract(5)),
        storeResult: (resultValue) => dispacher(actionCreators.storeResult(resultValue)),
        onDeleteResult:(id) => dispacher(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);