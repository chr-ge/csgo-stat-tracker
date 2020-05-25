import React, { useEffect, useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { Link } from 'react-router-dom';
import Player from '../Player';
import PlayerStats from '../PlayerStats';

//material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const PlayerGrid = ({match}) => {
    const { loading, player, searchPlayer, resetPlayer } = useContext(PlayerContext);

    useEffect(() => {
        if(!player.platformUserId){
            searchPlayer(match.params.player);
        }
    });

    return (
        <Container style={{ marginTop: '6rem'}}>
            {!loading && <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Player />
                    <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        color="primary"
                        style={{ marginTop: '1rem'}}
                        onClick={resetPlayer}
                        fullWidth
                    >
                        Seach for another Player
                    </Button>
                </Grid>
                <Grid item sm={8}>
                    <PlayerStats />
                </Grid>
            </Grid>}
        </Container>
    )
}

export default PlayerGrid
