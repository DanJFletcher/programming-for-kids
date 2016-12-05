import React, { Component } from 'react';
import './GameBoard.css';
import Tile from './Tile';

class GameBoard extends Component {
    render() {
        return (
            <div className="GameBoard">
            
              <div className="Column">
                <Tile />
                <Tile />
                <Tile />
              </div>
              
              <div className="Column">
                <tile />
                <Tile />
                <Tile />
              </div>
              
              <div className="Column">
                <Tile />
                <Tile />
                <Tile />
              </div>
            </div>
        );
    }
}

export default GameBoard;