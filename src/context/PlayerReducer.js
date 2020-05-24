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
                error: {
                    code: action.payload.code,
                    message: action.payload.message
                }
            }
        case 'HIDE_PROFILE_BUTTON':
            return{
                ...state, 
                showProfileButton: false
            }
        default:
            return state;
    }
}