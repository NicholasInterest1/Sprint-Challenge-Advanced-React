import React from "react";
import styled from "styled-components";

function PlayersCard(props) {
  return (
    <div className="player-wrapper">
      <div className="player-info">
        <TheP>Name: {props.data.name}</TheP>
        <TheP2>Country: {props.data.country}</TheP2>
        <TheP3>Google Searches: {props.data.searches}</TheP3>
      </div>
    </div>
  );
}

const TheP = styled.p`
    color: red;
    margin-top: 10px;
    padding: 15px;
`;
const TheP2 = styled.p`
    color: white;
    padding: 15px;
`;
const TheP3 = styled.p`
    color: blue;
    padding: 15px;
`;

export default PlayersCard;
