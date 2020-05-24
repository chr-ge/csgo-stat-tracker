import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingProgress = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary"/>
    </div>
)

export default LoadingProgress
