import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

/**
 * @param {props} => data form the app component
 * getCompletedTodos => select only the completed todos from the todolist
 * and pass them to display component
 */
const CompletedTodoLists = props => {
  const { todos } = props;

  function getCompletedTodos() {
    return todos.filter(value => value.isTodoCompleted === true);
  }
  console.log('completed', getCompletedTodos());
  return <DisplayTodoList {...props} todos={getCompletedTodos()} />;
};

CompletedTodoLists.propTypes = {
  props: PropTypes.any,
  todos: PropTypes.array.isRequired
};

export default CompletedTodoLists;
