import React from 'react';
import PropTypes from 'prop-types';

class DisplayList extends React.Component {
  render() {
    const {
      todo,
      handleDelete,
      checkboxRef,
      handleSelected,
      openModal
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
                      ref={checkboxRef}
                      onClick={() => handleSelected(value.isCompleted, index)}
                    />
                    <div className="todo-text">{value.todo}</div>
                    <button
                      className="btn btn-success delete-btn"
                      onClick={() => openModal(index)}
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
  todo: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  handleSelected: PropTypes.func,
  checkboxRef: PropTypes.any.isRequired,
  openModal: PropTypes.func
};

export default DisplayList;
