import React from 'react';
import PropTypes from 'prop-types';

class DisplayTodoList extends React.Component {
  render() {
    let {
      todos,
      isEdited,
      editTodo,
      editIndex,
      deleteTodo,
      handleChange,
      markTodoComplete
    } = this.props;

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
                          <input
                            className={
                              isEdited ? 'margin:12px 0' : 'completed-check'
                            }
                            checked={value.isTodoCompleted}
                            value={isEdited}
                            type="checkbox"
                            onChange={() =>
                              markTodoComplete(value.isTodoCompleted, index)
                            }
                          />
                          <p
                            className={
                              value.isTodoCompleted
                                ? 'todo-text mark-todo-completed'
                                : 'todo-text'
                            }
                          >
                            {value.todo}
                          </p>
                          <p className="todo-date">Created At:{value.date}</p>
                        </div>
                      )}
                      <div
                        className={
                          isEdited
                            ? 'whileEditInputIsOpen'
                            : 'actions-btn-container'
                        }
                      >
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
  editIndex: PropTypes.number,
  todos: PropTypes.array.isRequired,
  isEdited: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  markTodoComplete: PropTypes.func.isRequired
};

export default DisplayTodoList;
