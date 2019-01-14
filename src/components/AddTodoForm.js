import React from 'react';
import PropTypes from 'prop-types';

/**
 * input field to add todos
 * @param {inputTodoValue} => value from the input field
 *  @param {addTodo} => function to add todo to todolist
 * @param {handleTextChange} => handle text change in todo input field
 */
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
