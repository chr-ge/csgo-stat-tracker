
import React, { createContext, useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import axios from 'axios';

// axios.defaults.baseURL = 
//     'https://cors-anywhere.herokuapp.com/';
axios.defaults.headers.common['TRN-Api-Key'] = '5273ee4d-52a2-4a04-84de-7f5ce799b099';

const initialState = {
    player: [],
    error: ''
}

export const PlayerContext = createContext(initialState);

export const PlayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PlayerReducer, initialState);
    
    //Actions
    const searchPlayer = (player) => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=${player}`)
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