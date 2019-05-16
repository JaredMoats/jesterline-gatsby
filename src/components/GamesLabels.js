import React, { Component } from "react";
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
            <i className={
                this.props.activeSystem === "pc" ? "fas fa-desktop game-icon game-icon-active" : "fas fa-desktop game-icon"
              }
            />
            <h1 className={ this.props.activeSystem === "pc" ? "jl-red" : "" }>PC</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a onClick={ () => this.props.setVR() }>
            <i className={ this.props.activeSystem === "vr" ? "fas fa-user-astronaut game-icon game-icon-active" : "fas fa-user-astronaut game-icon" } />
            <h1 className={ this.props.activeSystem === "vr" ? "jl-red" : "" }>VR</h1>
          </a>
        </div>
        <div className="icon-name-container">
          <a onClick={ () => this.props.setSwitch() }>
            <i className={
                this.props.activeSystem === "switch" ? "fab fa-nintendo-switch game-icon game-icon-active" : "fab fa-nintendo-switch game-icon"
              }
            />
            <h1 className={ this.props.activeSystem === "switch" ? "jl-red" : "" }>Switch</h1>
          </a>
        </div>
        <div className="icon-name-container icon-margin-zero">
          <a onClick={ () => this.props.setPS4() }>
            <i className={
                this.props.activeSystem === "ps4" ? "fab fa-playstation game-icon game-icon-active" : "fab fa-playstation game-icon"
              }
            />
            <h1 className={ this.props.activeSystem === "ps4" ? "jl-red" : "" }>PS4</h1>
          </a>
        </div>
      </div>
    );
  }


}

export default GamesLabels;
