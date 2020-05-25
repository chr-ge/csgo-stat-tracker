import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import LoadingProgress from '../components/LoadingProgress';
import ErrorCard from '../components/ErrorCard';

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

const Maps = () => {
    const { player, playerMaps, getMaps, error } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId && !error.code){
            getMaps(player.platformUserId);
        }
    })
    
    const sortedPlayerMaps = playerMaps.sort((a,b) => a.stats.rounds.value > b.stats.rounds.value ? -1 : 1);

    return (
        <div>
            {error.code
            ?   <ErrorCard error={error}/>
            :   !playerMaps[0]
            ?   <LoadingProgress />
            : <>
                <Typography variant="h4" style={{ marginBottom: '1.5rem'}}>Most Played Maps</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="maps table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox" align="center" ><Typography variant="subtitle1" color="secondary">Map</Typography></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="right"><Typography variant="subtitle1" color="secondary">Rounds</Typography></TableCell>
                                <TableCell align="right"><Typography variant="subtitle1" color="secondary">Wins</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {sortedPlayerMaps.map((map, i) => (
                            <TableRow key={i}>
                                <TableCell align="center"><Avatar src={map.metadata.imageUrl} /></TableCell>
                                <TableCell component="th" scope="row">{map.metadata.name}</TableCell>
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
