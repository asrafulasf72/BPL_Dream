import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({promisePlayers}) => {
     const playersData= use(promisePlayers)
    return (
        <div className='max-w-[1200px] mx-auto mb-5'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 shadow-gray-200'>
                 {
                    playersData.map(player=> <Player player={player}></Player>)
                 }
              </div>
        </div>
    );
};

export default AvailablePlayers;