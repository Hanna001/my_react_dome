// import { combineReducers } from "_redux@4.0.0@redux";

const InitialState = {connt:0}
const reducers = (state=InitialState, action) => {
    let connt=state.connt
    switch (action.type) {
        case 'C':
            return {connt:'niahsdoahs'}
        case 'ADD':
            return {connt:connt+1}
        default:
            return state
    }
}
export {reducers}

// let reducers=combineReducers({Areducer,Breduver})