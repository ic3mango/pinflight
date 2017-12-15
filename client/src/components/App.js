import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Profile from './Profile';
import NewPin from './NewPin';

import { fetchUser } from '../actions';

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
          <Route path="/new" component={NewPin} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, { fetchUser })(App);
