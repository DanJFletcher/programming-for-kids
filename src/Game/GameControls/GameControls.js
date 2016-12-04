import React, { Component } from 'react';

class GameControls extends Component {
    render() {
        return (
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
        );
    }
}

export default GameControls;