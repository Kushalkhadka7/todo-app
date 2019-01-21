import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

/**
 * @param {props} props
 * GetInCompleteTodos => select only the incomplete todos from the todolist.
 */
const InCompleteTodoList = props => {
  const { todos } = props;

  /**
   * @returns Incomplete todos.
   */
  function getIncompleteTodos() {
    return todos.filter(value => value.isTodoCompleted === false);
  }

  return <DisplayTodoList {...props} todos={getIncompleteTodos()} />;
};

InCompleteTodoList.propTypes = {
  props: PropTypes.any,
  todos: PropTypes.array.isRequired
};

export default InCompleteTodoList;
