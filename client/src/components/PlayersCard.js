import React from "react";

function PlayersCard (props) {
  return (
    <div>
        <h2>{props.data.name}</h2>
        <p>Google Searches: {props.data.searches}</p>
        <p>{props.data.country}</p>
    </div>
  );
};

export default PlayersCard;
