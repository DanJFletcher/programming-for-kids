import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
    render() {
        return (
            <div className="GameBoard">
            
              <div className="Column">
                <div className="Tile"></div>
                <div className="Tile"></div>
                <div className="Tile"></div>
              </div>
              
              <div className="Column">
                <div className="Tile"></div>
                <div className="Tile"></div>
                <div className="Tile"></div>
              </div>
              
              <div className="Column">
                <div className="Tile"></div>
                <div className="Tile"></div>
                <div className="Tile"></div>
              </div>
            </div>
        );
    }
}

export default GameBoard;