import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions';

class DisplayPins extends Component {
  state = {}

  componentDidMount() {
    this.props.fetchPins();
  }
  render() {
    return (
      this.props.pins.map(pin =>
        <div className="card">
          <h1>{pin.title}</h1>
          <img src={pin.imgUrl} alt=""/>
          <p>{pin.description}</p>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ pins }) => {
  return { pins }
}

export default connect(mapStateToProps, actions)(DisplayPins);
