import React from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = ({
  inputTodoValue,
  addTodo = f => f,
  handleTextChange = f => f
}) => (
  <div className="row navcontainer">
    <div className="col-md-12 input-container">
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputTodoValue}
          placeholder="add your todo"
          onKeyUp={event => addTodo(event)}
          className="form-control input-todo"
          onChange={text => handleTextChange(text)}
        />
        <div className="input-group-append">
          <button
            onClick={e => addTodo(e)}
            className="btn btn-primary add-todo-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
);

AddTodoForm.proTypes = {
  addTodo: PropTypes.func.isRequired,
  inputTodoValue: PropTypes.any.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default AddTodoForm;
