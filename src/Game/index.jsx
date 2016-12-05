import React, { Component } from 'react';
import './Game.css';
import GameBoard from './GameBoard';
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