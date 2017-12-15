import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';


class Header extends Component {
  renderContent() {
    if (this.props.auth === false)
      return [
        <li><Link to="/pins">Pins</Link></li>,
        <li><a href="/auth/google">Login with google</a></li>
      ]
    if (this.props.auth === null)
      return [<li></li>,<li></li>];

    return [
      <li><Link to="/pins">Pins</Link></li>,
      <li><Link to="/nowhere">It's me maario</Link></li>
    ]
  }

  render() {
    return (
      <header>
        <Link to="/"><h2>PinFlight</h2></Link>

        <SearchBar />
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
