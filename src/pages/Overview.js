import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import StatisticCard from '../components/StatisticCard';
import LoadingProgress from '../components/LoadingProgress';
import ErrorCard from '../components/ErrorCard';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loading: { 
        display: 'flex',
        justifyContent: 'center'
    },
    cardsRow: {
        paddingTop: '1.5rem'
    },
    chip: {
        marginRight: 10
    },
    details: {
        margin: '1.5rem 0 0.5rem 0',
        display: 'flex',
        alignItems: 'center'
    }
});

const Overview = () => {
    const { player, playerOverview, getOverview, error } = useContext(PlayerContext);
    const classes = useStyles();

    useEffect(() => {
        if(player.platformUserId && !error.code){
            getOverview(player.platformUserId);
        }
    }, 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [player])

    const cardsData = (({ headshots, headshotPct, wins, losses, score, deaths, bombsPlanted, bombsDefused, hostagesRescued, shotsAccuracy, snipersKilled, roundsWon }) =>
         ({ headshots, headshotPct, wins, losses, score, deaths, bombsPlanted, bombsDefused, hostagesRescued, shotsAccuracy, snipersKilled, roundsWon }))(playerOverview);

    const tableData = (({ moneyEarned, damage, shotsFired, shotsHit, roundsPlayed, dominations, dominationOverkills, dominationRevenges }) =>
        ({ moneyEarned, damage, shotsFired, shotsHit, roundsPlayed, dominations, dominationOverkills, dominationRevenges }))(playerOverview);

    return (
        <div>
           {error.code
            ?   <ErrorCard error={error}/>
            :   !playerOverview.timePlayed 
            ?   <LoadingProgress />
            :
                <>
                    <div className={classes.header}>
                        <Typography variant="h4">Lifetime Overview</Typography>
                        <div>
                            <Chip 
                                label={`${playerOverview.timePlayed.displayValue} Play Time`} 
                                icon={<HistoryIcon />}
                                className={classes.chip}
                            />
                            <Chip 
                                label={`${playerOverview.matchesPlayed.displayValue} Matches`}
                                color="primary" 
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <Grid container spacing={2} className={classes.cardsRow}>
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
                    <Grid container spacing={2} className={classes.cardsRow}>
                        {Object.keys(cardsData).map((stat, i) => 
                            <Grid item xs={2} key={i}>
                                <StatisticCard displayName={cardsData[stat].displayName} displayValue={cardsData[stat].displayValue} />
                            </Grid>
                        )}
                    </Grid>
                    <Typography variant="h5" className={classes.details}><InfoIcon color="primary" style={{ marginRight: 5}}/> Player Details</Typography>
            
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="Player details table">
                            <TableBody>
                                {Object.keys(tableData).map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {tableData[row].displayName}
                                        </TableCell>
                                        <TableCell align="right">{tableData[row].displayValue}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
        
        </div>
    )
}

export default Overview
