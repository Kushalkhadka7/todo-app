import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

const InCompleteTodoList = props => {
  const { todos } = props;

  function getIncompleteTodos() {
    return todos.filter(value => value.isTodoCompleted === false);
  }

  return <DisplayTodoList todos={getIncompleteTodos()} {...props} />;
};

InCompleteTodoList.propTypes = {
  props: PropTypes.any,
  todo: PropTypes.array.isRequired
};
export default InCompleteTodoList;
