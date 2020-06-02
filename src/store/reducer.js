import * as actionType from '../store/action/actionTypes'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter+1;
            return  newState
            
        case actionType.DECREMENT:
            return {
                ...state, counter:state.counter-1
            }
        case actionType.ADD:
            return {
                ...state, counter:state.counter + action.value
            }
        case actionType.SUBTRACT:
            return {
                ...state, counter:state.counter - action.value
            }
        case actionType.STORE_RESULT:
            return {
                ...state, results: state.results.concat( {id: new Date(), resultval: state.counter})
            }
        case actionType.DELETE_RESULT:
            return {
                ...state, 
                results: state.results.filter((result) => result.id != action.resultEleId)
            }
    }
    return state;
};

export default reducer;