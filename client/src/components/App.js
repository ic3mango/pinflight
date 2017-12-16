import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
// import Dashboard from './Dashboard';
import Profile from './Profile';
import PinCreate from './PinCreate';
import PinEdit from './PinEdit';
import Gallery from './Gallery'

import { fetchUser } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <section className="container-fluid">
            <Route exact path="/" component={Landing} />
            <Route path="/gallery" component={Gallery} />
            <Switch>
              <Route path="/pin/new" component={PinCreate} />
              <Route path="/pin/:id" component={PinEdit} />
            </Switch>
            <Route path="/profile" component={Profile} />
          </section>
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, { fetchUser })(App);
