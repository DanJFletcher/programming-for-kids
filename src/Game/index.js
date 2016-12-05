// Dependancies
import React, { Component } from 'react';

// Styles
import './Game.css';

// Components
import GameBoard from './GameBoard/GameBoard';
import GameControls from './GameControls';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <GameBoard />
        <GameControls />
      </div>
    );
  }
}

export default Game;