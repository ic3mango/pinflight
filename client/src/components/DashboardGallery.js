import React, { Component } from 'react';
import NavBarTags from './NavBarTags';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

import GalleryCardDashboard from './GalleryCardDashboard';

import fallbackImg from '../assets/images/bombardier_cseries.jpeg';

class DashboardGallery extends Component {
  state = {
    tags: ['created', 'saved', 'hidden'],
    tagColors: ['primary', 'danger', 'secondary'],
    activeTag: 'created',
    showModal: false,
    modalPin: null,
  }

  handleTagClick = (activeTag) => {
    this.setState({ activeTag })
  }

  switchOnActiveTag = (activeTag) => {
    switch (activeTag) {
      case 'created':
        return 'creates';
      case 'saved':
        return 'saves';
      case 'hidden':
        return 'hides';
      default:
        return '';
    }
  }

  generateHiddenText = (activeTag) => {
    switch (activeTag) {
      case 'created':
        return 'No available action';
      case 'saved':
        return 'Click to remove';
      case 'hidden':
        return 'Click to unhide';
      default:
        return '';
    }
  }

  generateHandleAction = (activeTag) => {
    switch (activeTag) {
      case 'created':
        return () => { return }
      case 'saved':
        return this.props.handleRemoveSavedPin;
      case 'hidden':
        return this.props.handleUnhidePin;
      default:
        return '';
    }
  }

  render() {
    const masonryOptions = {
      transitionDuration: '0.22s',
      itemSelector: '.card',
      fitWidth: true
    };
    const activeTag = this.switchOnActiveTag(this.state.activeTag);
    const hiddenText = this.generateHiddenText(this.state.activeTag);
    const handleAction = this.generateHandleAction(this.state.activeTag);

    return (
      <div>
        <NavBarTags
          tags={this.state.tags}
          tagColors={this.state.tagColors}
          activeTag={this.state.activeTag}
          handleTagClick={this.handleTagClick}
        />

        {
          this.props.user &&

          <Masonry
            className="mx-auto"
            options={masonryOptions}
          >
            {this.props.user[activeTag]
              .map(pin => <GalleryCardDashboard
                key={pin._id}
                pin={pin}
                hiddenText={hiddenText}
                handleAction={() => handleAction(pin._id)}
              />
            )}
          </Masonry>
        }
      </div>
    )
  }
}

DashboardGallery.propTypes = {
  user: PropTypes.object.isRequired
}

export default DashboardGallery;
