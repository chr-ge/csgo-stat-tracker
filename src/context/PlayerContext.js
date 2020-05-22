
import React, { createContext, useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import api from '../api/api';

const initialState = {
    player: [],
    error: ''
}

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PlayerReducer, initialState);
    
    //Actions
    const searchPlayer = (player) => {
        api
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

    return (
        <PlayerContext.Provider value={{ player: state.player, searchPlayer}}>
            {children}
        </PlayerContext.Provider>
    );
};