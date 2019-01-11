import React from 'react';
import PropTypes from 'prop-types';

import AddTodoForm from './AddTodoForm';
import DisplayTodoList from './DisplayTodoList';

class TodoHome extends React.Component {
  render() {
    const {
      todos,
      addTodo,
      isEdited,
      inputTodoValue,
      handleTextChange
    } = this.props;

    return (
      <div>
        <AddTodoForm
          addTodo={addTodo}
          isEdited={isEdited}
          inputTodoValue={inputTodoValue}
          handleTextChange={handleTextChange}
        />
        <DisplayTodoList todos={todos} props={this.props} />
      </div>
    );
  }
}

TodoHome.propTypes = {
  addTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  todo: PropTypes.array.isRequired,
  markTodoCompleted: PropTypes.func
};

export default TodoHome;
