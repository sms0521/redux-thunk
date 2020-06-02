import * as actionTypes from './actionTypes'

export const storeResultValue = (resultValue) => {
    return {
        type:actionTypes.STORE_RESULT, result: resultValue
    }
}

export const storeResult = (resultValue) => {
    return (dispacher,getState) => {
        setTimeout(()=>{ 
            console.log('result value', getState().ctr.counter);
            dispacher(storeResultValue(resultValue))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type:actionTypes.DELETE_RESULT, resultEleId:id
    }
}