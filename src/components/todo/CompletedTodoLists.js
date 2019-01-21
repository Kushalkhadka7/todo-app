import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

/**
 * @param {props} props
 * GetCompletedTodos => select only the completed todos from the todolist.
 */
const CompletedTodoLists = props => {
  const { todos } = props;
  
  /**
   * @returns Completed todos.
   */
  function getCompletedTodos() {
    return todos.filter(value => value.isTodoCompleted === true);
  }

  return <DisplayTodoList {...props} todos={getCompletedTodos()} />;
};

CompletedTodoLists.propTypes = {
  props: PropTypes.any,
  todos: PropTypes.array.isRequired
};

export default CompletedTodoLists;
