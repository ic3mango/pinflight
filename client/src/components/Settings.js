import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { Link } from 'react-router-dom'

import { editUser } from '../actions';

class Settings extends Component {
  onSubmit = (userData) => {
    const nav = () => this.props.history.push('/dashboard');
    this.props.editUser(userData, nav);
  }

  renderField = (field) => {
    const { meta: { touched, error } } = field;
    const showError = touched && error;
    return (
      <div className="form-group">
        <label>
          {field.label}
        </label>
        <input
          {...field.input}
          className={classNames("form-control", { 'border border-danger': showError })}
          type="text"/>
        <p className="text-danger">
          {showError || <br/> }
        </p>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="container">
        <Field
          name="username"
          label="Username"
          component={this.renderField}
        />
        <Field
          name="email"
          label="Email"
          component={this.renderField}
        />
        <Field
          name="avatar"
          label="Avatar"
          component={this.renderField}
        />
        <div className="d-flex">
          <Link to="/dashboard" className="btn btn-danger">Cancel</Link>
          <button type="submit" className="btn btn-primary ml-auto">Submit</button>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "you need an username";
  }
  if (!values.email) {
    errors.email = "you need an email";
  }
  return errors;
}


function mapStateToProps({ auth}) {

  return { initialValues: auth }
}

export default compose(
  connect(mapStateToProps, { editUser }),
  reduxForm({ validate, form: 'ProfileSettingsForm' }),
)(Settings);
