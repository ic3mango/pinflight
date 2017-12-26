import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import SearchBar from './SearchBar';


class Header extends Component {
  // header is not responsive, fix soon
  renderContent() {
    if (this.props.auth === null)
      return <div>
        <Link className="nav-item nav-link" to="/gallery">Gallery</Link>
        <a className="nav-item nav-link" href="/auth/google">Login with google</a>
      </div>


    return <div className="d-flex">
        <Link className="nav-item nav-link" to="/gallery">Gallery</Link>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" // eslint-disable-line jsx-a11y/href-no-hash
          >
            Profile
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
            <Link className="dropdown-item" to="/pins/new">Create Pin</Link>
            <Link className="dropdown-item" to="/settings">Settings</Link>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/api/logout">Logout</a>
          </div>
        </div>
      </div>
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand h1" to="/">PinFlight</Link>

        <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {this.renderContent()}
          </div>
        </div>

        <SearchBar handleSearch={this.props.searchTextPins} />
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
