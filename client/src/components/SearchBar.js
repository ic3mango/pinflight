import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.text, () => this.props.history.push('/gallery'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline ml-auto search-bar">
        <input
          className="form-control mr-sm-2"
          type="search"
          aria-label="Search"
          value={this.state.text}
          onChange={this.onChange}
          placeholder="Boeing 747"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    )
  }
}

export default withRouter(SearchBar);
