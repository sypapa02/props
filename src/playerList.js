
import React from 'react';
import Player from './player';
import playersData from './players';

const PlayersList = () => {
  return (
    <div style={{display:'-webkit-inline-flex',}} className="players-list">
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
