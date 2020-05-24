import React from 'react';
import Player from './Player';
import PlayerStats from './PlayerStats';

//material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const PlayerGrid = () => (
    <Container style={{ marginTop: '6rem'}}>
        <Grid container spacing={2}>
            <Grid item sm={4}>
                <Player />
            </Grid>
            <Grid item sm={8}>
                <PlayerStats />
            </Grid>
        </Grid>
    </Container>
)

export default PlayerGrid
