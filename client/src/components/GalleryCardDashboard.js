import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../assets/styles/GalleryCardDashboard.css';

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';

const addDefaultImg = (event) => {
  event.target.src = fallbackImg;
}

const GalleryCardDashboard = (props) => {
  const pin = props.pin;
  console.log(pin);
  return (
    <div
      onClick={props.handleAction}
      className="card border-light m-2"
      style={{ width: "270px" }}
    >
      <img
        className="card-img-top"
        src={pin.imgUrl}
        alt="card"
        onError={addDefaultImg}
      />
      <div className="card-body">
        <h6 className="card-title">{pin.title}</h6>
        <button className="btn btn-default"></button>
      </div>

      <div className="card-hidden-center text-white">
        <h6>{props.hiddenText}</h6>
      </div>
    </div>
  )
}

GalleryCardDashboard.propTypes = {
  pin: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  hiddenText: PropTypes.string
}

export default GalleryCardDashboard;
