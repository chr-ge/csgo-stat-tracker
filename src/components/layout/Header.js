import React from 'react';
import LogoImage from '../../images/logo.png';

//material-ui
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
    <AppBar>
        <Container disableGutters>
            <Toolbar>
                <img src={LogoImage} alt="Logo" width="50" height="50"/>
                <Typography variant="h4" style={{ marginLeft: 15 }}>CS:GO Stat Tracker</Typography>
            </Toolbar>
        </Container>
    </AppBar>
)

export default Header
