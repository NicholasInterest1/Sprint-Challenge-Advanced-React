import React from "react";
import PlayersCard from "./PlayersCard";

function Players(props) {
  return (
    <div>
      {props.data.map(player => (
        <PlayersCard key={player.id} data={player} />
      ))}
    </div>
  );
};

export default Players;