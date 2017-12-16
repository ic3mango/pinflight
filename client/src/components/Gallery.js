import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import GalleryCard from './GalleryCard';
import * as actions from '../actions';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchPins();
  }

  hidePin = (pinId) => {
    console.log(pinId);
  }

  savePin = (pinId) => {
    console.log(pinId);
  }

  goToPin = (pinId) => {
    this.props.history.push(`/pin/${pinId}`);
  }

  render() {
    if (this.state.loadingBuffer)
      return <div className="">Loading</div>;

    const masonryOptions = {
      transitionDuration: '0.22s',
      itemSelector: '.card',
      fitWidth: true
    };

    return (
      <Masonry
        className="mx-auto"
        options={masonryOptions}
      >
        {this.props.pins.map(pin =>
          <GalleryCard
            goToPin={() => this.goToPin(pin._id)}
            hidePin={() => this.hidePin(pin._id)}
            savePin={() => this.savePin(pin._id)}
            key={pin._id} pin={pin}
          />
        )}
      </Masonry>
    );
  }
}

const mapStateToProps = ({ pins }) => {
  return { pins: pins.allPins }
}

export default withRouter(connect(mapStateToProps, actions)(Gallery));
