import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions';
import DashboardGallery from './DashboardGallery';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUserAllData();
  }

  handleRemoveSavedPin = (id) => {
    this.props.savePin(id);
  }

  handleUnhidePin = (id) => {
    this.props.hidePin(id);
  }

  render() {
    return (
      <div className="container">

        <div className="media">

          <img className="mr-3"
            src={this.props.user.avatar}
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            alt="user avatar"
          />

          <div className="media-body">
            <h2 className="mt-0 mb-1">{this.props.user.username}</h2>
            <div className="d-inline text-danger">{this.props.user.saves.length} saved pins</div>
            {' '}
            <div className="d-inline text-secondary">{this.props.user.hides.length} hidden pins</div>
          </div>

        </div>

        <DashboardGallery
          user={this.props.user}
          handleRemoveSavedPin={this.handleRemoveSavedPin}
          handleUnhidePin={this.handleUnhidePin}
        />

      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth
});

export default connect(mapStateToProps, actions)(Dashboard);
