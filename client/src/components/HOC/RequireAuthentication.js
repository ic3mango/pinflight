import React, { Component } from 'react'
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      if (!this.props.user) {
        this.props.history.push('/login');
        return null;
      }
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps({ auth }) {
    return { user: auth}
  }
  return connect(mapStateToProps)(Authentication);
}
