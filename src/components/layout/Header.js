import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import LogoImage from '../../images/logo.png';

import Typography from '@material-ui/core/Typography';

const Header = () => {
    return (
        <AppBar>
            <ToolBar>
                <img src={LogoImage} alt="Logo" width="50" height="50"/>
                <Typography variant="h4" style={{ marginLeft: 20}}>CS:GO Tracker</Typography>
            </ToolBar>
        </AppBar>
    )
}

export default Header
