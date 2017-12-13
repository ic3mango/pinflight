import React, { Component } from 'react'


import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h2>PinFlight</h2>
        <nav>
          <ul>
            <li><a href="/auth/google">Login with google</a></li>
            <li>Not yet working</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
