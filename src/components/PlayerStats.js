import React, { useState } from 'react';
import PropTypes from "prop-types";

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

//Pages
import Overview from '../pages/Overview';
import Weapons from '../pages/Weapons';
import Maps from '../pages/Maps';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PlayerStats = () => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState(0);
  
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Container style={{ marginTop: '6rem'}}>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    {/* <PlayerGrid /> */}
                </Grid>
                <Grid item sm={8}>
                    <Paper className={classes.root}>
                        <Tabs
                            value={activeTab}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Overview" {...a11yProps(0)}/>
                            <Tab label="Weapons" {...a11yProps(1)}/>
                            <Tab label="Maps" {...a11yProps(2)} />
                        </Tabs>
                    </Paper>
                    <TabPanel value={activeTab} index={0}>
                        <Overview />
                    </TabPanel>
                    <TabPanel value={activeTab} index={1}>
                        <Weapons />
                    </TabPanel>
                    <TabPanel value={activeTab} index={2}>
                        <Maps />
                    </TabPanel>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PlayerStats
