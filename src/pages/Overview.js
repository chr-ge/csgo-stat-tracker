import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Overview = () => {
    const { player, playerOverview, getOverview } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId){
            getOverview(player.platformUserId);
        }
    }, [player])

    return (
        <div>
            <h1>Overview</h1>
            <p>{JSON.stringify(playerOverview)}</p>
        </div>
    )
}

export default Overview
