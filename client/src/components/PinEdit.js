import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPin, clearPin } from '../actions';
import PinForm from './PinForm';

class PinEdit extends Component {
  componentDidMount() {
    this.props.fetchPin(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearPin();
  }

  render() {
    if (!this.props.pin) {
      return <div>Loading...</div>
    }
    const pin = this.props.pin;
    return (
      <div className="container">
        <h1>Editting pin: <strong>{pin && pin.title}</strong></h1>
        <PinForm pin={this.props.pin} formType="edit"/>
      </div>
    );
  }
}

const mapStateToProps = ({ pins }) => {
  return { pin: pins.selectedPin }
}

export default connect(mapStateToProps, { fetchPin, clearPin })(PinEdit);
