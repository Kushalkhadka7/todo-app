import React from 'react';

class DisplayTagsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTagsInEditMode: false
    };
  }

  toggleTagsEdit = () => {
    this.setState(prevState => ({
      isTagsInEditMode: !prevState.isTagsInEditMode
    }));
  };

  handleDelete = () => {
    console.log('deleted');
  };

  render() {
    const { isTagsInEditMode } = this.state;
    return (
      <div className="row tagsContainer">
        <div className="col-md-12 todo-list">
          <ul>
            <li>
              <div className="each-list clearfix">
                {isTagsInEditMode ? (
                  <input type="text" className="form-control edit-tags-input" />
                ) : (
                  <div className="tags-content-container">
                    <div>tags name</div>
                    <div>tags type</div>
                  </div>
                )}
                <div className="actions-btn-container tags-action-btn">
                  <button
                    className="btn btn-success tags-btn"
                    onClick={this.toggleTagsEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger tags-btn"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DisplayTagsList;
