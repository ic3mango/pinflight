import React, { Component } from 'react'
import { EntypoPin } from 'react-entypo'

import '../assets/styles/GalleryCard.css';

class GalleryCard extends Component {
  shareTweet = (pin) => {
    let url = "https://twitter.com/intent/tweet?hashtags=pinflight"
    pin.tags.forEach(tag => {
      url += `,${tag}`;
    });
    url += "&related=freecodecamp&text=";
    url += pin.title;
    window.open(url);
  }

  copyUrl = (pin) => {
    const text = `${window.location.origin}/pin/${pin._id}`;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

  render() {
    const user = this.props.user;
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
          <div onClick={this.props.noPropagate(() => {return;})} className="btn-group m-1" role="group">
            <button onClick={this.props.hidePin} className="btn btn-dark">Hide</button>
            <div className="btn-group" role="group">
              <button id="shareButtonDropdown" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Share
              </button>
              <div className="dropdown-menu" aria-labelledby="shareButtonDropdown">
                <button className="dropdown-item" onClick={() => this.copyUrl(pin)}>Copy URL</button>
                <button className="dropdown-item" onClick={() => this.shareTweet(pin)}>Twitter</button>
                {/* <a className="dropdown-item disabled" href="#">Facebook</a>
                <a className="dropdown-item disabled" href="#">Snapchat</a>
                <a className="dropdown-item disabled" href="#">Google</a> */}
              </div>
          </div>
          </div>

          <button
            onClick={this.props.savePin}
            className="btn btn-danger m-1"
          >
            {
              user &&
              user.saves.includes(pin._id.toString()) &&
              <EntypoPin />
            }
            Save
          </button>

        </div>
      </div>
    )
  }
}

export default GalleryCard;
