import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <input
        className="header-searchbar"
        value={this.state.text}
        onChange={this.onChange}
        placeholder="Boeing 747"
      />
    )
  }
}

export default SearchBar;
