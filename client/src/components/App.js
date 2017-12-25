import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import RequireAuthentication from './HOC/RequireAuthentication';

import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';
import Settings from './Settings';
import PinCreate from './PinCreate';
import PinEdit from './PinEdit';
import PinDetail from './PinDetail'
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
              <Switch>
                <Route path="/pins/new" component={RequireAuthentication(PinCreate)} />
                <Route path="/pins/:id/edit" component={RequireAuthentication(PinEdit)} />
                <Route path="/pins/:id" component={PinDetail} />
              </Switch>


              <Route path="/dashboard" component={RequireAuthentication(Dashboard)} />
              <Route path="/settings" component={RequireAuthentication(Settings)} />

              <Route path="/login" component={Login} />
              <Route path="/gallery" component={Gallery} />
              <Route exact path="/" component={Landing} />


          </section>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps, { fetchUser })(App);
