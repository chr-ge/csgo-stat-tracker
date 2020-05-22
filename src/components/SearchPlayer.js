import React, { useState, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchPlayer = () => {
    const { searchPlayer } = useContext(PlayerContext);
    const [player, setPlayer] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        searchPlayer(player);
    }

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <TextField
                name="player"
                type="text"
                value={player}
                label="Search for a player on Steam"
                onChange={e => setPlayer(e.target.value)}
                fullWidth
            />
            <Button
                type="submit"
                color="primary" 
                variant="contained"    
            >
                Search
            </Button>
        </form>
    )
}

export default SearchPlayer
