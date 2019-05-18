import React, { Component } from "react";
import { FaDesktop, FaUserAstronaut, FaNintendoSwitch, FaPlaystation } from "react-icons/fa";
import "../css/GamesLabels.css";

class GamesLabels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="games-section-labels-container">
        <div className="icon-name-container">
          <a onClick={ () => this.props.setPC() }>
            <FaDesktop
              className={ this.props.activeSystem === "pc" ? "game-icon game-icon-active" : "game-icon" }
            />
            <h1 className={ this.props.activeSystem === "pc" ? "jl-red" : "" }>PC</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a onClick={ () => this.props.setVR() }>
            <FaUserAstronaut
              className={ this.props.activeSystem === "vr" ? "game-icon game-icon-active" : "game-icon" }
            />
            <h1 className={ this.props.activeSystem === "vr" ? "jl-red" : "" }>VR</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a onClick={ () => this.props.setSwitch() }>
            <FaNintendoSwitch
              className={ this.props.activeSystem === "switch" ? "game-icon game-icon-active" : "game-icon" }
            />
            <h1 className={ this.props.activeSystem === "switch" ? "jl-red" : "" }>Switch</h1>
          </a>
        </div>
        <div className="icon-name-container icon-margin-zero">
          <a onClick={ () => this.props.setPS4() }>
            <FaPlaystation
              className={ this.props.activeSystem === "ps4" ? "game-icon game-icon-active" : "game-icon" }
            />
            <h1 className={ this.props.activeSystem === "ps4" ? "jl-red" : "" }>PS4</h1>
          </a>
        </div>
      </div>
    );
  }


}

export default GamesLabels;
