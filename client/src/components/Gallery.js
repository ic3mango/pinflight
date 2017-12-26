import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import NavBarTags from './NavBarTags';
import GalleryCard from './GalleryCard';
import PinModal from './PinModal';
import * as actions from '../actions';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  defaultState = {
    showModal: false,
    modalPin: null,
    activeTag: 'all',
  }

  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchPins();
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

  handleEditClick = (pinId) => {
    if (!this.userAuthenticated())
      return;

    this.props.setActivePin(this.state.modalPin);
    this.setState(this.defaultState, () => this.navigateToEdit(pinId));
  }

  navigateToEdit(pinId) {
    this.props.history.push(`/pins/${pinId}/edit`);
  }

  handleTagClick = (activeTag) => {
    this.setState({
      activeTag
    });
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

    const hides = (this.props.user && this.props.user.hides) || [];
    let tags = this.props.tags || [];
    if (tags.length && tags[0]._id !== 'all') {
      tags.unshift({ _id: 'all', count: tags.reduce((acc, cur) => acc + cur.count, 0)});
    }

    return (
      <div>
        <NavBarTags
          activeTag={this.state.activeTag}
          tags={tags.map(t => t._id)}
          handleTagClick={this.handleTagClick}
        />
        <Masonry
          className="mx-auto"
          options={masonryOptions}
        >
          {this.props.pins.filter(pin => !hides.map(h => h._id).includes(pin._id))
            .filter(pin => this.state.activeTag === 'all' || pin.tags.includes(this.state.activeTag))
            .map(pin =>
            <GalleryCard
              addDefaultImg={this.addDefaultImg}
              showModal={() => this.showModal(pin)}
              hidePin={this.clickHandlerNoPropagate(() => this.hidePin(pin._id))}
              savePin={this.clickHandlerNoPropagate(() => this.savePin(pin._id))}
              noPropagate={this.clickHandlerNoPropagate}
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
          savePin={this.savePin}
          user={this.props.user}
          handleEditClick={this.handleEditClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ pins, auth, tags }) => {
  return {
    pins,
    user: auth,
    tags
  };
}

export default withRouter(connect(mapStateToProps, actions)(Gallery));
