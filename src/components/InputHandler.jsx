import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ inputRef = null, submitInput = f => f }) => (
  <div className="row navcontainer">
    <div className="col-md-12 input-container">
      <div className="input-group mb-3">
        <input
          type="text"
          onKeyUp={e => submitInput(e)}
          ref={inputRef}
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
  submitInput: PropTypes.func.isRequired,
  inputRef: PropTypes.any.isRequired
};

export default AddTodo;
