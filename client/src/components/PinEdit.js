import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPin, clearPin } from '../actions';
import PinForm from './PinForm';

class PinEdit extends Component {
  componentDidMount() {
    if (!this.props.pin) {
      this.props.fetchPin(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearPin();
  }

  render() {
    const pin = this.props.pin;
    
    if (!pin) {
      return <div>Pin Not Found</div>
    }

    return (
      <div className="container">
        <h1>Editting pin: <strong>{pin && pin.title}</strong></h1>
        <PinForm pin={this.props.pin} formType="edit"/>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedPin }) => {
  return { pin: selectedPin }
}

export default connect(mapStateToProps, { fetchPin, clearPin })(PinEdit);
