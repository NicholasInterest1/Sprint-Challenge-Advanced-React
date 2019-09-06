import React from "react";

function PlayersCard(props) {
  return (
    <div className="player-wrapper">
      <div className="player-info">
        <p>Name: {props.data.name}</p>
        <p>Country: {props.data.country}</p>
        <p>Google Searches: {props.data.searches}</p>
      </div>
    </div>
  );
}

export default PlayersCard;
