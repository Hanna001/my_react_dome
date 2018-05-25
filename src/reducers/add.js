const InitialState = {connt:0}
const addReducers = (state=InitialState, action) => {
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
export {addReducers}