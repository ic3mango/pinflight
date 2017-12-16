import React, { Component } from 'react'

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';
import '../assets/styles/GalleryCard.css';

class GalleryCard extends Component {
  addDefaultImg = (event) => {
    event.target.src = fallbackImg;
  }

  hidePinNoPropagate = (e) => {
    e.stopPropagation();
    this.props.hidePin();
  }

  savePinNoPropagate = (e) => {
    e.stopPropagation();
    this.props.savePin();
  }

  render() {
    const pin = this.props.pin;
    return (
      <div
        onClick={() => this.props.goToPin()}
        className="card border-light m-2"
        style={{ width: "270px" }}
      >
        <img
          className="card-img-top"
          src={pin.imgUrl}
          alt="card"
          onError={this.addDefaultImg}
        />
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
        </div>

        <div className="card-hidden">
          <button onClick={this.hidePinNoPropagate} className="btn btn-dark m-1">Hide</button>
          <button onClick={this.savePinNoPropagate} className="btn btn-danger m-1">Save</button>
        </div>
      </div>
    )
  }
}

export default GalleryCard;
