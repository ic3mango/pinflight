import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Header from './Header';
import '../styles/App.css';

import { fetchUser } from '../actions';

const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>
const PinNew = () => <h2>PinNew</h2>
const Profile = () => <h2>Profile</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {


    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/new" component={PinNew} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
