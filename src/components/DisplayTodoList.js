import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

import withLoader from './Hoc/LoaderHoc';

/**
 * @class DisplayTodoList
 * @extends {React.Component}
 * displays all the todos based on the props passed to this component
 * displays buttons and checkboxes
 * handles delete and edit todo
 */
class DisplayTodoList extends React.Component {
  render() {
    let {
      todos,
      editTodo,
      deleteTodo,
      handleChange,
      markTodoComplete
    } = this.props;

    return (
      <div className="row navcontainer">
        <div className="col-md-12 todo-list">
          <ul>
            {todos.map((value, index) => {
              return (
                <li key={value.id}>
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ duration: 500 }}
                  >
                    {props => (
                      <div style={props} className="each-list clearfix">
                        {value.isEditedTodo ? (
                          <input
                            className="form-control edit-todo"
                            type="text"
                            value={value.todo}
                            onChange={e => handleChange(value.todo, index, e)}
                            onKeyUp={e => e.key === 'Enter' && editTodo(index)}
                          />
                        ) : (
                          <div className="todo-content-container">
                            <input
                              className={
                                value.isEditedTodo
                                  ? 'margin:12px 0'
                                  : 'completed-check'
                              }
                              checked={value.isTodoCompleted}
                              value={value.isEditedTodo}
                              type="checkbox"
                              onChange={() => markTodoComplete(value, index)}
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
                            value.isEditedTodo
                              ? 'whileEditInputIsOpen'
                              : 'actions-btn-container'
                          }
                        >
                          <button
                            disabled={value.isTodoCompleted}
                            className="btn btn-success action-btn"
                            onClick={() => editTodo(index)}
                          >
                            {value.isEditedTodo ? (
                              <i className="fas fa-check" />
                            ) : (
                              'Edit'
                            )}
                          </button>
                          <button
                            className="btn btn-danger action-btn"
                            onClick={() => deleteTodo(index, value)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </Spring>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

DisplayTodoList.propTypes = {
  editIndex: PropTypes.number,
  handleChange: PropTypes.func,
  todos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markTodoComplete: PropTypes.func.isRequired
};

export default withLoader(DisplayTodoList);
