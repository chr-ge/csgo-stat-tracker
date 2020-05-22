export default (state, action) => {
    switch(action.type) {
        case 'SEARCH_PLAYER':
            return {
                ...state,
                player: action.payload
            }
        case 'SET_OVERVIEW':
            return {
                ...state,
                playerOverview: action.payload
            }
        case 'SET_WEAPONS':
            return {
                ...state,
                playerWeapons: action.payload
            }
        case 'SET_MAPS':
            return {
                ...state,
                playerMaps: action.payload
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