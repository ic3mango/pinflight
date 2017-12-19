import React from 'react'

export default (props) => {
  const bootstrapColors = ['secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <nav className="nav justify-content-center">
      <button
        onClick={() => props.handleTagClick('all')}
        className={`btn btn-sm mx-2 btn-outline-primary ${props.activeTag === 'all' && 'active'} text-uppercase`}
      >
        All
      </button>
      {props.tags.map((tag, i) => <button
        key={i}
        onClick={() => props.handleTagClick(tag._id)}
        className={`btn btn-sm mx-2 btn-outline-${bootstrapColors[i % 7]} ${tag._id === props.activeTag && 'active'} text-uppercase`}
      >
        {tag._id}
      </button>
      )}
    </nav>
  )
}
