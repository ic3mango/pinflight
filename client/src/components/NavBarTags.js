import React from 'react';
import PropTypes from 'prop-types';

const NavBarTags = (props) => {
  const colors = props.tagColors || ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <nav className="nav justify-content-center">
      {props.tags.map((tag, i) => <button
        key={i}
        onClick={() => props.handleTagClick(tag)}
        className={`btn btn-sm mx-2 btn-outline-${colors[i % colors.length]} ${tag === props.activeTag && 'active'} text-uppercase`}
      >
        {tag}
      </button>
      )}
    </nav>
  )
}

NavBarTags.propTypes = {
  tags: PropTypes.array.isRequired,
  handleTagClick: PropTypes.func.isRequired,
  tagColors: PropTypes.array,
  activeTag: PropTypes.string
}


export default NavBarTags;
