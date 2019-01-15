import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Function} {
 *  InputTodoValue,
 *  addTodo = f => f,
 *  handleTextChange = f => f
 * }
 * .
 */
const AddTodoForm = ({
  inputTodoValue,
  addTodo = f => f,
  handleTextChange = f => f
}) => (
  <div className="row">
    <div className="col-md-12 ">
      <div className="input-group mb-3 input-container">
        <input
          type="text"
          value={inputTodoValue}
          placeholder="add your todo"
          onKeyUp={addTodo}
          className="form-control input-todo"
          onChange={text => handleTextChange(text)}
        />
        <div className="input-group-append">
          <button onClick={addTodo} className="btn btn-primary add-todo-btn">
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
