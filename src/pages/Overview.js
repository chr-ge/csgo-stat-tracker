import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import StatisticCard from '../components/StatisticCard';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import HistoryIcon from '@material-ui/icons/History';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardsRow: {
        paddingTop: '1.5rem'
    }
});

const Overview = () => {
    const { player, playerOverview, getOverview } = useContext(PlayerContext);
    const classes = useStyles();

    useEffect(() => {
        // if(player.platformUserId){
        //     getOverview(player.platformUserId);
        // }
        getOverview('76561198164316555');
    }, 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [player])

    console.log(playerOverview);
    return (
        <div>
           {playerOverview.timePlayed && 
           <>
                <div className={classes.header}>
                    <Typography variant="h4">Lifetime Overview</Typography>
                    <Chip 
                        label={`${playerOverview.timePlayed.displayValue} Play Time`} 
                        icon={<HistoryIcon />}
                    />
                </div>
                <div className={classes.cardsRow}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <StatisticCard displayName={playerOverview.kd.displayName} displayValue={playerOverview.kd.displayValue}/>  
                        </Grid>
                        <Grid item xs={3}>
                            <StatisticCard displayName={playerOverview.kills.displayName} displayValue={playerOverview.kills.displayValue}/>
                        </Grid>
                        <Grid item xs={3}>
                            <StatisticCard displayName={playerOverview.wlPercentage.displayName} displayValue={playerOverview.wlPercentage.displayValue}/>
                        </Grid>
                        <Grid item xs={3}>
                            <StatisticCard displayName={playerOverview.mvp.displayName} displayValue={playerOverview.mvp.displayValue}/>
                        </Grid>
                    </Grid>
                </div>
            </>
            }
        
        </div>
    )
}

export default Overview
