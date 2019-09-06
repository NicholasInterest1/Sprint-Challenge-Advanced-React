import React from "react";

import NavBar from "./components/NavBar";
import PlayersCard from "./components/PlayersCard";

import "./App.scss";

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
        {this.state.data.map(player => (
          <PlayersCard key={player.id} data={player} />
        ))}
        {/* <Player data={this.state.data} /> */}
      </div>
    );
  }
}

export default App;
