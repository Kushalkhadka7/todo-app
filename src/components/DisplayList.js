import React from 'react';

class DisplayList extends React.Component {
  render() {
    const {
      todo,
      handleDelete,
      checkboxRef,
      handleSelected,
      openModel
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
                      onClick={() => openModel(index)}
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

export default DisplayList;
