import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
// import Dashboard from './Dashboard';
import Profile from './Profile';
import CreateForm from './CreateForm';
import DisplayPins from './DisplayPins'

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
            <Route path="/pins" component={DisplayPins} />
            <Route path="/pin" component={CreateForm} />
            <Route path="/profile" component={Profile} />
          </section>
        </div>
      </BrowserRouter>
    );
  }
}


export default connect(null, { fetchUser })(App);
