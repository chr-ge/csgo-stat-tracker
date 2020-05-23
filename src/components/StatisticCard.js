import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StatisticCard = ({displayName, displayValue}) => {
    return (
        <Paper elevation={3} style={{padding: '0.5rem 1rem'}}>
            <Typography variant="subtitle1" color="secondary">{displayName}</Typography>
            <Typography variant="h5">{displayValue}</Typography>
        </Paper>
    )
}

export default StatisticCard
