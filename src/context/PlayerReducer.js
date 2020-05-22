export default (state, action) => {
    switch(action.type) {
        case 'SEARCH_PLAYER':
            return {
                ...state,
                player: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state, 
                error: action.payload
            }
        default:
            return state;
    }
}