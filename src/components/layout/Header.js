import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogoImage from '../../images/logo.png';

import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <img src={LogoImage} alt="Logo" width="50" height="50"/>
                <Typography variant="h4" style={{ marginLeft: 20}}>CS:GO Tracker</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
