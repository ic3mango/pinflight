import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';


class Header extends Component {
  renderContent() {
    if (this.props.auth === null)
      return <div className=""></div>
    if (this.props.auth === false)
      return <React.Fragment>
        <Link className="nav-item nav-link" to="/gallery">Gallery</Link>
        <a className="nav-item nav-link" href="/auth/google">Login with google</a>
      </React.Fragment>


    return <React.Fragment>
        <Link className="nav-item nav-link" to="/gallery">Gallery</Link>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
            <Link className="dropdown-item" to="/settings">Settings</Link>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/auth/logout">Logout</a>
          </div>
        </div>
      </React.Fragment>
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand mb-0 h1" to="/">PinFlight</Link>

        <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {this.renderContent()}
          </div>
        </div>

        <SearchBar />
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
