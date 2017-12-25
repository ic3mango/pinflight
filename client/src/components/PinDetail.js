import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import PinModal from './PinModal';

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';

class PinDetail extends Component {
  state = {
    isModalOpen: true
  }

  componentDidMount() {
    if (!this.props.pin) {
      this.props.fetchPin(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearPin();
  }

  addDefaultImg = (event) => {
    event.target.src = fallbackImg;
  }

  handleEditClick = (pinId) => {
    this.props.setActivePin(this.props.pin);
    this.props.history.push(`/pins/${pinId}/edit`);
  }

  savePin = (pinId) => {
    this.props.savePin(pinId);
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  }

  render () {
    const pin = this.props.pin;

    if (!pin) {
      return <div className="container text-center">
        <Link to="/" className="btn btn-danger btn-lg">Pin Not Found</Link>
      </div>
    }

    return (
      <div className="container text-center">
        <Link to="/" className="btn btn-success btn-lg">Go to Landing Page</Link>

        <PinModal
          pin={this.props.pin}
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          addDefaultImg={this.addDefaultImg}
          savePin={this.savePin}
          user={this.props.user}
          handleEditClick={this.handleEditClick}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ selectedPin, auth }) => {
  return { pin: selectedPin, user: auth }
}



export default connect(mapStateToProps, actions)(PinDetail);
