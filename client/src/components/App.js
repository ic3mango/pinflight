import React, { Component } from 'react';
import {} from 'react-router-dom';


import Header from './Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Hi from App component</div>
        <div>sub header</div>
      </div>
    );
  }
}

export default App;
