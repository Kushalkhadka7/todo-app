import React from 'react';
import PropTypes from 'prop-types';

class DisplayList extends React.Component {
  render() {
    let {
      todo,
      isEdited,
      handleChange,
      handleDelete,
      handleEdition,
      handleSelected,
      editIndex,
      submitInput
    } = this.props;

    return (
      <div className="row navcontainer">
        <div className="col-md-12 todo-list">
          {todo.length ? (
            <ul>
              {todo.map((value, index) => {
                index === editIndex ? (isEdited = true) : (isEdited = false);
                return (
                  <li key={index}>
                    <div className="each-list clearfix">
                      <input
                        className="completed-check"
                        checked={value.isCompleted}
                        value={isEdited}
                        type="checkbox"
                        onChange={() =>
                          handleSelected(value.isCompleted, index)
                        }
                      />
                      {isEdited ? (
                        <input
                          className="form-control edit-todo"
                          type="text"
                          value={value.todo}
                          onChange={e => handleChange(value.todo, index, e)}
                          onKeyUp={e =>
                            e.key === 'Enter' && handleEdition(null)
                          }
                        />
                      ) : (
                        <p className="todo-text">{value.todo}</p>
                      )}
                      <div className="actions-btn-container">
                        <button
                          disabled={value.isCompleted}
                          className="btn btn-success action-btn"
                          onClick={() => handleEdition(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger action-btn"
                          onClick={() => handleDelete(index)}
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
            <div className="default-text">nothing to display</div>
          )}
        </div>
      </div>
    );
  }
}

DisplayList.propTypes = {
  handleDelete: PropTypes.func,
  handleSelected: PropTypes.func,
  todo: PropTypes.array.isRequired
};

export default DisplayList;
