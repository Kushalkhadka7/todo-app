import React from 'react';
import PropTypes from 'prop-types';

class DisplayList extends React.Component {
  state = {
    editTodoValue: ''
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
  }
  render() {
    let {
      todo,
      isEdited,
      handleDelete,
      handleEdition,
      handleSelected,
      editIndex
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
                          type="text"
                          value={value.todo}
                          onChange={this.handleChange}
                        />
                      ) : (
                        <p className="todo-text">{value.todo}</p>
                      )}

                      <button
                        disabled={value.isCompleted}
                        className="btn btn-success delete-btn"
                        onClick={() => handleEdition(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
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
