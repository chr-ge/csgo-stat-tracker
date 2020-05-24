import React from 'react';

//material-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const ErrorCard = ({ error }) => (
    <Paper style={{padding: '2rem', textAlign: 'center'}}>
        <Typography variant="h6" color="secondary">Error: {error.code}</Typography>
        <Typography variant="h5">{error.message}</Typography>
    </Paper>
)

export default ErrorCard
