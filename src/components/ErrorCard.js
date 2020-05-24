import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const ErrorCard = ({ error }) => (
    <Paper style={{padding: '2rem', textAlign: 'center'}}>
        <Typography variant="h6" color="secondary">Error: {error.code}</Typography>
        <Typography variant="h5">{error.message}</Typography>
        <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            style={{marginTop: 15}}
            color="primary"
        >
            Go Home
        </Button>
    </Paper>
)

export default ErrorCard
