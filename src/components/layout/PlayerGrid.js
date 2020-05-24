import React from 'react';
import Player from '../Player';
import PlayerStats from '../PlayerStats';
import SearchAgainButton from '../SearchAgainButton';

//material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const PlayerGrid = () => (
    <Container style={{ marginTop: '6rem'}}>
        <Grid container spacing={2}>
            <Grid item sm={4}>
                <Player />
                <SearchAgainButton />
            </Grid>
            <Grid item sm={8}>
                <PlayerStats />
            </Grid>
        </Grid>
    </Container>
)

export default PlayerGrid
