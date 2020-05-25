import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      height: 165
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '40%',
    },
    button: {
        marginTop: 20
    }
});

const Player = () => {
    const classes = useStyles();
    const { player, showProfileButton, hideProfileButton } = useContext(PlayerContext);
    
    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.cover}
                image={player.avatarUrl}
                aria-label="Player avatar"
            />
            <CardContent className={classes.content}>
                <Typography variant="h4" color="textPrimary">
                    {player.platformUserHandle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {player.platformUserId}
                </Typography>
                {showProfileButton && 
                <Button 
                    type="button"
                    component={Link} 
                    tabIndex="1"
                    aria-label="View player statistics"
                    variant="contained" 
                    color="secondary"
                    onClick={hideProfileButton}
                    className={classes.button}
                    style={{ color: 'black' }}
                    to={`/player/${player.platformUserId}`}
                    fullWidth
                >
                    <EqualizerIcon /> 
                    View Player Stats
                </Button>}
            </CardContent>
        </Card>
    )
}

export default Player