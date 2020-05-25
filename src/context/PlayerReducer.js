import {
  LOADING, SEARCH_PLAYER, SET_OVERVIEW, SET_WEAPONS,
  SET_MAPS, SET_ERROR, HIDE_PROFILE_BUTTON, RESET_PLAYER,
} from "./types";

export default (state, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_PLAYER:
            return {
                ...state,
                loading: false,
                player: action.payload
            }
        case SET_OVERVIEW:
            return {
                ...state,
                playerOverview: action.payload
            }
        case SET_WEAPONS:
            return {
                ...state,
                playerWeapons: action.payload
            }
        case SET_MAPS:
            return {
                ...state,
                playerMaps: action.payload
            }
        case SET_ERROR:
            return {
                ...state, 
                loading: false,
                error: {
                    code: action.payload.code,
                    message: action.payload.message
                }
            }
        case HIDE_PROFILE_BUTTON:
            return {
                ...state, 
                showProfileButton: false
            }
        case RESET_PLAYER:
            return {
                ...state, 
                error: {},
                showProfileButton: true,
                player: {}
            }
        default:
            return state;
    }
}