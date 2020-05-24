import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

//material-ui
import Button from '@material-ui/core/Button';

const SearchAgainButton = () => {
    const { resetPlayer } = useContext(PlayerContext);

    return (
        <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem'}}
            onClick={resetPlayer}
            fullWidth
        >
            Seach for another Player
        </Button>
    )
}

export default SearchAgainButton
