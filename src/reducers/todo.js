const InitialState = {text:'hello'}
const todoReducers = (state=InitialState, action) => {
    let connt=state.connt
    switch (action.type) {
        case 'tode':
            return {connt:'niahsdoahs'}
        default:
            return state
    }
}
export {todoReducers}