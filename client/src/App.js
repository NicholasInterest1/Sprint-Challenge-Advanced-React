import React from "react";

import NavBar from "./components/NavBar";
import PlayersCard from "./components/PlayersCard";

import "./App.scss";
import styled from "styled-components";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <TheDiv>
        {this.state.data.map(player => (
          <PlayersCard key={player.id} data={player} />
        ))}
        </TheDiv>
      </div>
    );
  }
}

const TheDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default App;
