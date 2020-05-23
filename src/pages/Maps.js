import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Maps = () => {
    const { player, playerMaps, getMaps } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId){
            getMaps(player.platformUserId);
        }
    }, 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [player])

    return (
        <div>
            <h1>Maps</h1>
            <p>{JSON.stringify(playerMaps)}</p>
        </div>
    )
}

export default Maps
