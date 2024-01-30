
import React from 'react';
import PlayersList from './playerList'; // Assurez-vous d'avoir le chemin correct vers le composant PlayersList

function App() {
  return (
    <div style={{color:'black',fontFamily:'fantasy'}} className="App">
      <h1>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
