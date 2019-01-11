import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

const CompletedTodoLists = props => {
  const { todos } = props;

  function getCompletedTodos() {
    return todos.filter(value => value.isTodoCompleted === true);
  }

  return <DisplayTodoList todos={getCompletedTodos()} {...props} />;
};

CompletedTodoLists.propTypes = {
  props: PropTypes.any,
  todos: PropTypes.array.isRequired
};

export default CompletedTodoLists;
