import React, { Component } from "react";
import GamesLabels from "./GamesLabels";
import GamesCards from "./GamesCards";
import SectionHeading from "./SectionHeading";
import "./../css/GamesList.css";
import pcData from "./../data/pcGames";
import switchData from "./../data/switchGames";
import ps4Data from "./../data/ps4Games";
import vrData from "./../data/vrGames";

class GamesList extends Component {
  constructor(props) {
    super(props);

    /* I want this component to be the source of truth for the
    games that should be displayed */

    /* activeSection will help keep track of 1. what labels need to be red
    and what games need to be displayed */
    this.state = {
      activeSystem: "pc",
      gameData: pcData
    };
  }

  setPC() {
    this.setState({
      activeSystem: "pc",
      gameData: pcData
    });
  }

  setPS4() {
    this.setState({
      activeSystem: "ps4",
      gameData: ps4Data
    });
  }

  setSwitch() {
    this.setState({
      activeSystem: "switch",
      gameData: switchData
    });
  }

  setVR() {
    this.setState({
      activeSystem: "vr",
      gameData: vrData
    });
  }

  render() {
    return (
      <React.Fragment>
      <div className="games-section-container">
        <SectionHeading headerName="Games" sectionId="games"/>
        <GamesLabels
          activeSystem={ this.state.activeSystem }
          setPC={ () => this.setPC() }
          setPS4={ () => this.setPS4() }
          setSwitch={ () => this.setSwitch() }
          setVR={ () => this.setVR() }
        />
        <GamesCards
          gameData={ this.state.gameData }
        />
      </div>
      </React.Fragment>
    );
  }
}

export default GamesList;
