import React, { useState, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

//material-ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const SearchPlayer = () => {
    const { searchPlayer, error } = useContext(PlayerContext);
    const [player, setPlayer] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        searchPlayer(player);
    }

    return (
        <Paper>
            <form onSubmit={handleSubmit} className="search-container">
                <TextField
                    name="player"
                    type="text"
                    value={player}
                    label="Search for a player on Steam"
                    onChange={e => setPlayer(e.target.value)}
                    error={error.message ? true : false}
                    helperText={error.message}
                    fullWidth
                />
                <Button
                    type="submit"
                    color="primary" 
                    variant="contained"    
                    style={{ marginLeft: '1rem'}}
                >
                    Search
                </Button>
            </form>
        </Paper>
    )
}

export default SearchPlayer
