import React from 'react';
import PropTypes from 'prop-types';

class DisplayList extends React.Component {
  render() {
    const {
      todo,
      isEdited,
      handleDelete,
      handleEdition,
      handleSelected
    } = this.props;

    return (
      <div className="row navcontainer">
        <div className="col-md-12 todo-list">
          {todo.length ? (
            <ul>
              {todo.map((value, index) => (
                <li key={index}>
                  <div className="each-list clearfix">
                    <input
                      className="completed-check"
                      type="checkbox"
                      onClick={() => handleSelected(value.isCompleted, index)}
                    />
                    <div className="todo-text">{value.todo}</div>
                    <button
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
              ))}
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
