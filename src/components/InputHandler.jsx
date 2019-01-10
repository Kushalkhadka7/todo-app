import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({
  inputValue = 'enter your text here',
  handleTextChange = f => f,
  submitInput = f => f
}) => (
  <div className="row navcontainer">
    <div className="col-md-12 input-container">
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputValue}
          onKeyUp={e => submitInput(e)}
          onChange={text => handleTextChange(text)}
          className="form-control input-todo"
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary add-todo-btn"
            onClick={e => submitInput(e)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
);

AddTodo.proTypes = {
  inputRef: PropTypes.any.isRequired,
  submitInput: PropTypes.func.isRequired
};

export default AddTodo;
