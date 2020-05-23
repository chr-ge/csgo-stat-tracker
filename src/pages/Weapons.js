import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Weapons = () => {
    const { player, playerWeapons, getWeapons } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId){
            getWeapons(player.platformUserId);
        }
    }, 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [player])

    return (
        <div>
            <h1>Weapons</h1>
            <p>{JSON.stringify(playerWeapons)}</p>
        </div>
    )
}

export default Weapons
