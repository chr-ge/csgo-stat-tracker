import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import LogoImage from '../../images/logo.png';

const Header = () => {
    return (
        <AppBar>
            <ToolBar>
                <img src={LogoImage} alt="Logo" width="50" height="50"/>
                <h1 style={{ marginLeft: 15}}>CS:GO Tracker</h1>
            </ToolBar>
        </AppBar>
    )
}

export default Header
