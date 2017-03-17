import React from 'react';
let {Component} = React;
import './App.css';
import PersonTable from "./PersonTable";

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <p>Your initila task is to fetch data from the server, and create a table below, whit these data</p>
          <PersonTable factory={this.props.factory}/>      
        </div>
      </div>
    );
  }
}

export default App;
