import React, { Component } from 'react'

import '../assets/styles/GalleryCard.css';

class GalleryCard extends Component {

  render() {
    const pin = this.props.pin;
    return (
      <div
        onClick={() => this.props.showModal()}
        className="card border-light m-2"
        style={{ width: "270px" }}
      >
        <img
          className="card-img-top"
          src={pin.imgUrl}
          alt="card"
          onError={this.props.addDefaultImg}
        />
        <div className="card-body">
          <h6 className="card-title">{pin.title}</h6>
        </div>

        <div className="card-hidden">
          <button onClick={this.props.hidePin} className="btn btn-dark m-1">Hide</button>
          <button onClick={this.props.savePin} className="btn btn-danger m-1">Save</button>
        </div>
      </div>
    )
  }
}

export default GalleryCard;
