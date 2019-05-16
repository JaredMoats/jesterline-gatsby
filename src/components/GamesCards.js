import React from "react";
import "../css/GamesCards.css";

const GamesCards = props => {
  return(
    <div className="cards-container">
      {props.gameData.map((game, index) =>
        <div className="card game-card" key={index}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={game.boxArt} alt={game.title} />
            </figure>
          </div>
          <div className="card-content">
            <p className="title game-title">{game.title}</p>
            <div className="game-divider" />
            <p className="title game-platform">{game.system}</p>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default GamesCards;
