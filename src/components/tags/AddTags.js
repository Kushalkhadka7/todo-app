import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class AddTags
 * @extends {React.Component}
 * form to add tags
 */
class AddTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    };
  }

  /**
   * @memberof AddTags
   * handle state change of the input tags fields(name,type)
   * @param {event} => change event in input fiels
   */
  handleChange = event => {
    const { name } = event.target;
    if (name === 'tagName') {
      this.setState({ name: event.target.value });
    } else if (name === 'tagType') {
      this.setState({ type: event.target.value });
    }
  };

  /**
   * @memberof AddTags
   * submit the input data
   * @param {event} => submit form event
   * pass the name and type event to parent class onSubmitTags function
   */
  handleSubmit = event => {
    event.preventDefault();
    const { name, type } = this.state;
    if (name !== '' && type !== '') {
      this.props.onSubmitTags(this.state.name, this.state.type);
      this.setState({ name: '', type: '' });
    } else {
      alert('please check your input fields');
    }
  };

  /**
   * @returns => name and type input field
   * @memberof AddTags
   */
  render() {
    return (
      <div className="row">
        <div className="col-md-12 tags-input-container">
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              value={this.state.name}
              name="tagName"
              onChange={this.handleChange}
              type="text"
              placeholder="enter tag name"
              className="form-control tags-input"
            />
            <label>Type:</label>
            <input
              value={this.state.type}
              onChange={this.handleChange}
              name="tagType"
              type="text"
              placeholder="enter tag type"
              className="form-control tags-input"
            />
            <button
              type="submit"
              value="submit"
              className="btn btn-success add-tags-btn"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddTags.propTypes = {
  onSubmitTags: PropTypes.func.isRequired
};
export default AddTags;
