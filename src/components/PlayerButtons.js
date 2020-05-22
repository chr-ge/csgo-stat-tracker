import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#c0b2ff',
      marginTop: 6,
      borderRadius: '0.25rem'
    },
});

const PlayerButtons = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
            showLabels
            >
            <BottomNavigationAction label="Overview" icon={<EqualizerIcon />} />
            <BottomNavigationAction label="Weapons" icon={<SportsEsportsIcon />} />
            <BottomNavigationAction label="Maps" icon={<ExploreIcon />} />
        </BottomNavigation>
    )
}

export default PlayerButtons
