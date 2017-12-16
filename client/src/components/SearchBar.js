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
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          aria-label="Search"
          value={this.state.text}
          onChange={this.onChange}
          placeholder="Boeing 747"
        />
        <button className="btn btn-outline-primary" type="submit">
          Seach
        </button>
      </form>
    )
  }
}

export default SearchBar;
