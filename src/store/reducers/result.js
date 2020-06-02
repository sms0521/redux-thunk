import * as actionType from '../action/actionTypes'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.STORE_RESULT:
            return {
                ...state, results: state.results.concat( {id: new Date(), resultval: action.result})
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