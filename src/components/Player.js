import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    }
});

const Player = () => {
    const classes = useStyles();
    const { player } = useContext(PlayerContext);
    
    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.cover}
                image={player.avatarUrl}
                aria-label="Player Avatar"
            />
            <CardContent className={classes.content}>
                <Typography variant="h4" color="textSecondary">
                    {player.platformUserHandle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {player.platformUserId}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Player
