
import React, { createContext, useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import API from '../api';

const initialState = {
    player: {},
    playerOverview: {},
    playerWeapons: [],
    playerMaps: [],
    error: ''
}

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PlayerReducer, initialState);
    
    const searchPlayer = (player) => {
        API
            .get(`/search?platform=steam&query=${player}`)
            .then((result) => {
                if(result.data.data.length === 0) {
                    dispatch({
                        type: 'SET_ERROR',
                        payload: 'No Player Found'
                    });
                }
                dispatch({
                    type: 'SEARCH_PLAYER',
                    payload: result.data.data[0]
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.response.data.errors
                });
            })
    }

    const getOverview = (playerId) => {
        API
            .get(`/profile/steam/${playerId}`)
            .then((result) => {
                dispatch({
                    type: 'SET_OVERVIEW',
                    payload: result.data.data.segments[0].stats
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.response.data.errors.message
                });
            })
    }

    const getWeapons = (playerId) => {
        API
            .get(`/profile/steam/${playerId}/segments/weapon`)
            .then((result) => {
                dispatch({
                    type: 'SET_WEAPONS',
                    payload: result.data.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.response.data.errors.message
                });
            })
    }

    const getMaps = (playerId) => {
        API
            .get(`/profile/steam/${playerId}/segments/map`)
            .then((result) => {
                dispatch({
                    type: 'SET_MAPS',
                    payload: result.data.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.response.data.errors.message
                });
            })
    }

    return (
        <PlayerContext.Provider 
            value={{ 
                player: state.player, 
                playerOverview: state.playerOverview,
                playerWeapons: state.playerWeapons,
                playerMaps: state.playerMaps,
                error: state.error, 
                searchPlayer, 
                getOverview,
                getWeapons,
                getMaps
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};