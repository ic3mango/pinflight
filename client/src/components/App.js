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
                {/* authenticated users landing directly on /new or /edit will see a login screen
                    wow, even submitting a new http request clears application state, i might need a better solution
                */}
                <Route path="/pins/new" component={RequireAuthentication(PinCreate)} />
                <Route path="/pins/:id/edit" component={RequireAuthentication(PinEdit)} />
                <Route path="/pins/:id" component={PinDetail} />
              </Switch>


              {/* Dashboard requires auth fetch for populated data */}
              <Route path="/dashboard" component={Dashboard} />
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
