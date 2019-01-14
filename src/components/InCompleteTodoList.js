import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

/**
 * @param {props} => data form the app component
 * getInCompleteTodos => select only the incomplete todos from the todolist
 * and pass them to display component
 */
const InCompleteTodoList = props => {
  const { todos } = props;

  function getIncompleteTodos() {
    return todos.filter(value => value.isTodoCompleted === false);
  }
  console.log('incompleted', getIncompleteTodos());
  return <DisplayTodoList {...props} todos={getIncompleteTodos()} />;
};

InCompleteTodoList.propTypes = {
  props: PropTypes.any,
  todos: PropTypes.array.isRequired
};
export default InCompleteTodoList;
