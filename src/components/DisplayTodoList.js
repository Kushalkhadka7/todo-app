import React from 'react';
import PropTypes from 'prop-types';

class DisplayTodoList extends React.Component {
  render() {
    let {
      isEdited,
      editTodo,
      editIndex,
      deleteTodo,
      handleChange,
      markTodoCompleted
    } = this.props.props;
    const { todos } = this.props;

    return (
      <div className="row navcontainer">
        <div className="col-md-12 todo-list">
          {todos.length ? (
            <ul>
              {todos.map((value, index) => {
                index === editIndex ? (isEdited = true) : (isEdited = false);
                return (
                  <li key={value.id}>
                    <div className="each-list clearfix">
                      <input
                        className="completed-check"
                        checked={value.isTodoCompleted}
                        value={isEdited}
                        type="checkbox"
                        onChange={() =>
                          markTodoCompleted(value.isTodoCompleted, index)
                        }
                      />
                      {isEdited ? (
                        <input
                          className="form-control edit-todo"
                          type="text"
                          value={value.todo}
                          onChange={e => handleChange(value.todo, index, e)}
                          onKeyUp={e => e.key === 'Enter' && editTodo(null)}
                        />
                      ) : (
                        <div className="todo-content-container">
                          <p className="todo-text">{value.todo}</p>
                          <p className="todo-date">Created At:{value.date}</p>
                        </div>
                      )}
                      <div className="actions-btn-container">
                        <button
                          disabled={value.isTodoCompleted}
                          className="btn btn-success action-btn"
                          onClick={() => editTodo(index)}
                        >
                          {isEdited ? <i className="fas fa-check" /> : 'Edit'}
                        </button>
                        <button
                          className="btn btn-danger action-btn"
                          onClick={() => deleteTodo(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="default-text">no todo to display</div>
          )}
        </div>
      </div>
    );
  }
}

DisplayTodoList.propTypes = {
  props: PropTypes.any.isRequired,
  todo: PropTypes.array.isRequired
};

export default DisplayTodoList;
