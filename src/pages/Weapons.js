import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PlayerContext } from '../context/PlayerContext';
import LoadingProgress from '../components/LoadingProgress';
import ErrorCard from '../components/ErrorCard';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    title: {
        marginBottom: '1.5rem'
    },
    tabs: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0.25rem'

    },
    tab: {
      minWidth: 72,
      marginRight: theme.spacing(3),
    },
    imgDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '2rem',
        width: '4rem',
        margin: '0 1rem'
    },
    img: {
        maxWidth: '100%',
        haxHeight: '100%'
    },
    kills: {
        backgroundColor: '#5b5b59'
    }
  }));

const TabPanel = ({ children, value, index, ...other }) => {
    const classes = useStyles();

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`weapon-tabpanel-${index}`}
        aria-labelledby={`weapon-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box py={3}>
            <TableContainer component={Paper}>
                <Table aria-label="weapons table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" align="center"><Typography variant="subtitle1" color="secondary">Weapon</Typography></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="right" className={classes.kills}><Typography variant="subtitle1" color="secondary">Kills</Typography></TableCell>
                            <TableCell align="right"><Typography variant="subtitle1" color="secondary">Shots Fired</Typography></TableCell>
                            <TableCell align="right"><Typography variant="subtitle1" color="secondary">Shots Hit</Typography></TableCell>
                            <TableCell align="right" style={{paddingLeft:0}}><Typography variant="subtitle1" color="secondary">Shots Accuracy</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {children.map((row) => (
                            <TableRow key={row.attributes.key}>
                                <TableCell padding="checkbox">
                                    <div className={classes.imgDiv}>
                                        <img src={row.metadata.imageUrl} className={classes.img} alt={row.metadata.name}/>
                                    </div>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.metadata.name}</TableCell>
                                <TableCell align="right" className={classes.kills}>{row.stats.kills.displayValue}</TableCell>
                                <TableCell align="right">{row.stats.shotsFired.displayValue}</TableCell>
                                <TableCell align="right">{row.stats.shotsHit.displayValue}</TableCell>
                                <TableCell align="right">{row.stats.shotsAccuracy.displayValue}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.array.isRequired,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `weapon-tab-${index}`,
        "aria-controls": `weapon-tabpanel-${index}`,
    };
}

const Weapons = () => {
    const { player, playerWeapons, getWeapons, error } = useContext(PlayerContext);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    useEffect(() => {
        if(player.platformUserId && !error.code){
            getWeapons(player.platformUserId);
        }
    })

    const sortedWeapons = playerWeapons.sort((a,b) => a.stats.kills.value > b.stats.kills.value ? -1 : 1);

    return (
      <div>
        {error.code
            ?   <ErrorCard error={error}/>
            :   !playerWeapons[0]
            ?   <LoadingProgress />
            :   <>
                    <Typography variant="h4" className={classes.title}>Most Used Weapons</Typography>
                    <div className={classes.root}>
                        <Paper>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                className={classes.tabs}
                                aria-label="weapon tabs"
                            >
                                <Tab label="All Weapons" {...a11yProps(0)} className={classes.tab}/>
                                <Tab label="Rifle" {...a11yProps(1)} className={classes.tab}/>
                                <Tab label="Smg" {...a11yProps(2)} className={classes.tab}/>
                                <Tab label="Pistol" {...a11yProps(2)} className={classes.tab}/>
                                <Tab label="Heavy" {...a11yProps(2)} className={classes.tab}/>
                                <Tab label="Gear" {...a11yProps(2)} className={classes.tab}/>
                            </Tabs>
                        </Paper>
                        <TabPanel value={value} index={0}>
                            {sortedWeapons}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {sortedWeapons.filter((w) => w.metadata.category.value === 'rifle')}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {sortedWeapons.filter((w) => w.metadata.category.value === 'smg')}
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            {sortedWeapons.filter((w) => w.metadata.category.value === 'pistol')}
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            {sortedWeapons.filter((w) => w.metadata.category.value === 'heavy')}
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            {sortedWeapons.filter((w) => w.metadata.category.value === 'gear')}
                        </TabPanel>
                    </div>
                </>
        }
      </div>
    );
}

export default Weapons
