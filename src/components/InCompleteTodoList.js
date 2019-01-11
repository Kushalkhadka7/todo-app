import React from 'react';
import PropTypes from 'prop-types';

import DisplayTodoList from './DisplayTodoList';

const InCompleteTodoList = props => {
  const { todos } = props;

  function mapInCompletedTodo() {
    return todos.filter(value => value.isTodoCompleted === false);
  }

  return (
    <div>
      <DisplayTodoList todos={mapInCompletedTodo()} {...props} />
    </div>
  );
};

InCompleteTodoList.propTypes = {
  props: PropTypes.any,
  todo: PropTypes.array.isRequired
};
export default InCompleteTodoList;
