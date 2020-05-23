import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';

//material-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExploreIcon from '@material-ui/icons/Explore';

const Maps = () => {
    const { player, playerMaps, getMaps } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId){
            getMaps(player.platformUserId);
        }
    }, 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [player])
    
    const sortedPlayerMaps = playerMaps.sort((a,b) => a.stats.rounds.value > b.stats.rounds.value ? -1 : 1);

    return (
        <div>
            {!sortedPlayerMaps[0] 
            ? <div style={{ display: 'flex', justifyContent: 'center' }}><CircularProgress color="secondary" /></div>
            : <>
                <Typography variant="h4" style={{ marginBottom: 10}}>Most Played Maps</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" padding="checkbox"><ExploreIcon style={{ verticalAlign: 'middle'}}/></TableCell>
                                <TableCell align="left" ><Typography variant="h6" color="secondary">Map</Typography></TableCell>
                                <TableCell align="right"><Typography variant="h6" color="secondary">Rounds</Typography></TableCell>
                                <TableCell align="right"><Typography variant="h6" color="secondary">Wins</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {sortedPlayerMaps.map((map, i) => (
                            <TableRow key={i}>
                                <TableCell >
                                    <Avatar src={map.metadata.imageUrl} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {map.metadata.name}
                                </TableCell>
                                <TableCell align="right">{map.stats.rounds.displayValue}</TableCell>
                                <TableCell align="right">{map.stats.wins.displayValue}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
            }
        </div>
    )
}

export default Maps
