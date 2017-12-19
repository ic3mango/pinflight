import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

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
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/pin/:id" component={PinDetail} />
            {
              this.props.auth && <React.Fragment>
                <Switch>
                  <Route path="/pin/new" component={PinCreate} />
                  <Route path="/pin/:id/edit" component={PinEdit} />
                </Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/settings" component={Settings} />
              </React.Fragment>
            }
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
