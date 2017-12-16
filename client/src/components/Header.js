import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';


class Header extends Component {
  renderContent() {
    if (this.props.auth === false)
      return [
        <Link className="nav-item nav-link" to="/pins">Pins</Link>,
        <a className="nav-item nav-link" href="/auth/google">Login with google</a>
      ];

    return [
      <Link className="nav-item nav-link" to="/pins">Pins</Link>,
      <Link className="nav-item nav-link" to="/nowhere">It's me maario</Link>
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
