import React from 'react'
import { Link } from 'react-router-dom'
import {
  EntypoAircraftTakeOff,
  EntypoAir,
  EntypoBlock,
  EntypoPin,
  EntypoShare,
  EntypoIcloud
} from 'react-entypo';

import '../assets/styles/Landing.css'

const Landing = () => {
  return (
    <div>
      <div className="hero text-center container">
        <div className="hero-background"></div>

        <div className="hero-content">
          <h3>Pin Flight - Pinterest clone</h3>

          <h1 className="hero-punchline">Pin a flight, <span>share your pins</span></h1>

          <h4>The best place for aeronautics lovers to share their pictures</h4>
        </div>
      </div>

      <nav className="landing-nav container">
        <Link className="btn btn-secondary btn-lg landing-nav-item" to="/gallery">View all pins</Link>
        <Link className="btn btn-primary btn-lg landing-nav-item" to="/login">Sign in</Link>
      </nav>

      <div className="features-wrapper container">
        <div className="section-title">
          <div className="section-title-content">
            <strong>Features of PinFlight</strong>
          </div>
        </div>

        <div className="features">
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-primary">
                <EntypoAircraftTakeOff />
              </span>
              <h5 className="feature-title d-inline-block">Pin pictures from the internet</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-warning">
                <EntypoIcloud />
              </span>
              <h5 className="feature-title d-inline-block">Upload your own pictures</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-info">
                <EntypoAir />
              </span>
              <h5 className="feature-title d-inline-block">Check out pins in our gallery</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-danger">
                <EntypoPin />
              </span>
              <h5 className="feature-title d-inline-block">Save pins for later</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-secondary">
                <EntypoBlock />
              </span>
              <h5 className="feature-title d-inline-block">Hide pins that are not relevant</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
          <div className="feature">

            <div className="feature-header">
              <span className="feature-icon text-info">
                <EntypoShare />
              </span>
              <h5 className="feature-title d-inline-block">Share pins with all your friends</h5>
            </div>

            <div className="feature-body">
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>

          </div>
        </div>
        <div className="features-gallery-link">
          <Link to="/gallery">View all pins</Link>
        </div>

      </div>

      <div className="comments-wrapper container">
        <div className="section-title">
          <div className="section-title-content">
            <strong>Happy Users</strong>
          </div>
        </div>

        <div className="comments">
          <div className="row">

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/men/57.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">George Luciagnie</h5>
                  <span className="text-muted">Published pin#1</span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/men/12.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">Francis Kobayashi</h5>
                  <span className="text-muted">Published pin#2</span>
                </div>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/women/17.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">Maria Hozbentger</h5>
                  <span className="text-muted">Published pin#3</span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/men/89.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">Mark Anthony</h5>
                  <span className="text-muted">Published pin#4</span>
                </div>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/women/58.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">Audrey Pitagowel</h5>
                  <span className="text-muted">Published pin#5</span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm my-3">
              <div className="media">
                <img className="mr-3" src="https://randomuser.me/api/portraits/women/69.jpg" alt="user"/>
                <div className="media-body">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...
                  <h5 className="mt-3 mb-0 text-secondary">Candice Horatio</h5>
                  <span className="text-muted">Published pin#6</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Landing;
