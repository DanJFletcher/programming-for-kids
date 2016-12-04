import React, { Component } from 'react';
import logo from './logo.svg';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
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
        
        <div className="ControlPanel">
        
          <div className="ControlButton ControlTurnLeft">
            <i className="fa fa-rotate-left" aria-hidden="true"></i>
            <p className="ControlLabelSide">Turn Left</p>
          </div>
          
          <div className="CenterControl">
            <div className="ControlButton ControlForward">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
              <p className="ControlLabelCenter">Forward</p>
            </div>
            <div className="ControlButton ControlBack">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="ControlLabelCenter">Back</p>
            </div>
          </div>
          
          <div className="ControlButton ControlTurnRight">
            <i className="fa fa-rotate-right" aria-hidden="true"></i>
            <p className="ControlLabelSide">Turn Right</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

const node = {
  neighbors: {
    north: {
      coords: "01",
      type: "space",
    }
  }
}

const character = {
  node: "Node",
  facing: "North"
}

/**
 * Rules:
 * 
 * If forward
 *  check facing
 *    check tile at facing
 *      if tile is space: move to tile
 *      if tile is wall: don't move
 * 
 * routine: moveToTile
 *   move character to coords of facing tile
 *   if new tile type is exit: end game
 * 
 * 
 */
