import React from "react";
import styled from "styled-components";

function PlayersCard(props) {
  return (
      <div className="player-info">
          <TheA
        href={`http://www.wikipedia.org/wiki/${props.data.name
          .split(' ')
          .join(' ')}`}
        target='_blank'
        rel='noopener noreferrer'>
        <TheP>Name: {props.data.name}</TheP>
        <TheP2>Country: {props.data.country}</TheP2>
        <TheP3>Google Searches: {props.data.searches}</TheP3>
        </TheA>
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

const TheA = styled.a`
    text-decoration: none;
`;

export default PlayersCard;
