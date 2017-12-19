import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import GalleryCard from './GalleryCard';
import PinModal from './PinModal';
import * as actions from '../actions';

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';

class Gallery extends Component {
  defaultState = {
    showModal: false,
    modalPin: null
  }

  state = this.defaultState;

  componentDidMount() {
    this.props.fetchPins();
  }

  addDefaultImg = (event) => {
    event.target.src = fallbackImg;
  }

  clickHandlerNoPropagate = (clickHandler) =>
    (e) => {
      e.stopPropagation();
      clickHandler();
    }

  userAuthenticated = () => {
    if (!this.props.user) {
      this.props.history.push('/login');
      return false;
    }
    return true;
  }

  hidePin = (pinId) => {
    if (!this.userAuthenticated())
      return;
    this.props.hidePin(pinId);
  }

  savePin = (pinId) => {
    if (!this.userAuthenticated())
      return;
    this.props.savePin(pinId);
  }

  handleEditClick = () => {
    if (!this.userAuthenticated())
      return;
    this.props.setActivePin(this.state.modalPin);
    this.setState(this.defaultState);
  }

  showModal = (pin) => {
    this.setState({
      modalPin: pin,
      showModal: true
    });
  }

  closeModal = () => {
    this.setState(this.defaultState);
  }

  render() {
    const masonryOptions = {
      transitionDuration: '0.22s',
      itemSelector: '.card',
      fitWidth: true
    };

    return (
      <div>
        <Masonry
          className="mx-auto"
          options={masonryOptions}
        >
          {this.props.pins.map(pin =>
            <GalleryCard
              addDefaultImg={this.addDefaultImg}
              showModal={() => this.showModal(pin)}
              hidePin={this.clickHandlerNoPropagate(() => this.hidePin(pin._id))}
              savePin={this.clickHandlerNoPropagate(() => this.savePin(pin._id))}
              key={pin._id}
              user={this.props.user}
              pin={pin}
            />
          )}
        </Masonry>
        <PinModal
          pin={this.state.modalPin}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
          addDefaultImg={this.addDefaultImg}
          savePin={this.savePin}
          user={this.props.user}
          handleEditClick={this.handleEditClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ pins, auth }) => {
  return { pins, user: auth }
}

export default withRouter(connect(mapStateToProps, actions)(Gallery));
