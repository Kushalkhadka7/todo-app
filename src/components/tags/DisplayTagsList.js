import React from 'react';
import PropTypes from 'prop-types';

import withLoader from '../hoc/LoaderHoc';

/**
 * @class DisplayTagsList
 * @extends {React.Component}
 */
class DisplayTagsList extends React.Component {
  /**
   * @returns Jsx to display tags.
   * @memberof DisplayTagsList
   */
  render() {
    const { tagsList, removeTags, editTag } = this.props;
    
    return (
      <div className="row tagsContainer">
        <div className="col-md-12 todo-list">
          <ul>
            {tagsList.map((value, index) => (
              <li key={value.id}>
                <div className="each-list clearfix">
                  {value.isEditedTag ? (
                    <input
                      type="text"
                      className="form-control edit-tags-input"
                    />
                  ) : (
                    <div className="tags-content-container">
                      <div>{value.name}</div>
                      <div>{value.type}</div>
                    </div>
                  )}
                  <div className="actions-btn-container tags-action-btn">
                    <button
                      className="btn btn-success tags-btn"
                      onClick={() => editTag(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger tags-btn"
                      onClick={() => removeTags(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

DisplayTagsList.propTypes = {
  tagsList: PropTypes.array.isRequired
};
export default withLoader(DisplayTagsList);
