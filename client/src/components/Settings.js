import React from 'react'
import { connect } from 'react-redux';

const Settings = (props) => {
  console.table(props.user);
  return (
    <div className="container">
      {"check console for user information"}
    </div>
  )
}


function mapStateToProps({ auth}) {
  return { user: auth }
}

export default connect(mapStateToProps)(Settings);
