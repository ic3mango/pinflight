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
        <label>{field.label}</label>
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

  renderTextArea = (field) =>
    <div className="form-group">
      <label>{field.label}</label>
      <textarea
        {...field.input}
        className="form-control"
        rows="3"></textarea>
    </div>

  renderGenderRadioSelectors = () => {
    const options = ["Male", "Female", "Others"];
    return (
      <div className="form-group">
        <label className="d-block">Gender</label>
        {options.map(option =>
          <div key={option} className="form-check form-check-inline mr-3">
            <div className="form-check-label">
              <Field
                className="form-check-input"
                name="gender"
                type="radio"
                label={option}
                value={option}
                component="input"
              />
              {option}
            </div>
          </div>
        )}
      </div>
    );
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
        <Field
          name="about"
          label="About"
          component={this.renderTextArea}
        />
        <Field
          name="location"
          label="Location"
          component={this.renderField}
        />
        <Field
          name="website"
          label="Website"
          component={this.renderField}
        />
        {this.renderGenderRadioSelectors()}

        <div className="d-flex">
          <Link to="/dashboard" className="btn btn-danger">Cancel</Link>
          <button type="submit" className="btn btn-primary ml-auto">Save</button>
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
