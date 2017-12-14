import React, { Component } from 'react'
import { connect } from 'react-redux';


import '../styles/Header.css';

class Header extends Component {
  renderContent() {
    if (!this.props.auth)
      return <li><a href="/auth/google">Login with google</a></li>;

    return <li>It's me maario</li>;
  }

  render() {
    return (
      <header>
        <h2>PinFlight</h2>
        <nav>
          <ul>
            {this.renderContent()}
          </ul>
        </nav>
      </header>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
