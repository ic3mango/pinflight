import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from '../actions';

class CreateForm extends Component {
  state = {
    title: '',
    imgUrl: '',
    description: '',
    tags: [],
    like: true,
  }

  onChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    let value;

    switch (type) {
      case 'checkbox':
        value = e.target.checked;
        break;
      case 'select-multiple':
        value = Array.from({ length: e.target.length })
          .map((_, i) => e.target[i].selected && e.target[i].value)
          .filter(val => !!val);
        break;
      default:
        value = e.target.value;
    }

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.createPin(this.state);

    this.props.history.push('/pins');
  }

  render() {
    return (
      <div className="container">

        <h1>Create a new pin</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="pinCreationFormTitle">Title</label>
            <input
              onChange={this.onChange}
              value={this.state.title}
              name="title"
              type="text"
              className="form-control"
              id="pinCreationFormTitle"
              placeholder="Pin Title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pinCreationFormImgUrl">Image Url</label>
            <input
              onChange={this.onChange}
              value={this.state.imgUrl}
              name="imgUrl"
              type="text"
              className="form-control"
              id="pinCreationFormImgUrl"
              placeholder="Image Url"/>
          </div>

          <div className="form-group">
            <label htmlFor="pinCreationFormDescription">Description</label>
            <textarea
              onChange={this.onChange}
              value={this.state.description}
              name="description"
              id="pinCreationFormDescription"
              cols="30"
              rows="3"
              className="form-control"
              placholder="This is optional">
              </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="pinCreationFormTags">Tags</label>
            <select
              onChange={this.onChange}
              value={this.state.tags}
              name="tags"
              id="pinCreationFormTags"
              multiple
              className="form-control">
              <option value="propeller">propeller</option>
              <option value="jet">jet</option>
              <option value="rotor">rotor</option>
              <option value="space">space</option>
              <option value="human">human</option>
              <option value="etc">etc</option>
            </select>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                onChange={this.onChange}
                value={this.state.like}
                name="like"
                type="checkbox"
                checked
                className="form-check-input" />
              automatically like created pin
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create
          </button>

        </form>

      </div>
    );
  }
}

export default withRouter(connect(null, actions)(CreateForm));
