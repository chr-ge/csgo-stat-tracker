import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Weapons = () => {
    const { player, playerWeapons, getWeapons } = useContext(PlayerContext);

    useEffect(() => {
        if(player.platformUserId){
            getWeapons(player.platformUserId);
        }
    }, [player])

    return (
        <div>
            <h1>Weapons</h1>
            <p>{JSON.stringify(playerWeapons)}</p>
        </div>
    )
}

export default Weapons
