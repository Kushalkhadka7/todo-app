import React from 'react';

import Header from '../Header';
import AddTags from './AddTags';
import DisplayTagsList from './DisplayTagsList';
import * as tagService from '../../services/tags';
/**
 * @param {Number} index
 * @class Main
 * @augments {React.Component}
 */
class Main extends React.Component {
  /**
   * Creates an instance of Main.
   *
   * @param {*} props
   * @memberof Main
   */
  constructor(props) {
    super(props);
    this.state = {
      tagsList: []
    };
  }

  /**
   * Fetch tags from api.
   *
   * @memberof Main
   */
  componentDidMount() {
    tagService
      .fetchTags()
      .then(tagsList => this.setState({ tagsList }))
      .catch(error => error);
  }

  /**
   * @memberof Main
   * @param {String} name
   * @param {String} type
   */
  onSubmitTags = (name, type) => {
    const tagsTobeSaved = {
      id: Date.now(),
      name: name,
      type: type,
      isEditedTag: false
    };

    tagService
      .addTags(tagsTobeSaved)
      .then(data => {
        this.setState({
          tagsList: [...this.state.tagsList, data.data]
        });
      })
      .catch(error => error);
  };

  editTag = index => {
    const tagsListCopy = this.state.tagsList.map(tags => ({ ...tags }));

    tagsListCopy[index].isEditedTag = !tagsListCopy[index].isEditedTag;

    if (!tagsListCopy[index].isEditedTodo) {
      tagService
        .editTag(tagsListCopy[index])
        .then(data => {
          tagsListCopy[index] = data.data;
          this.setState({
            tagsList: tagsListCopy
          });
        })
        .catch(error => error);
    }
  };

  /**
   * @memberof Main
   * @param {Number} index
   */
  removeTags = index => {
    const tagsListCopy = this.state.tagsList.map(tags => ({ ...tags }));
    const obj = tagsListCopy[index];

    tagService
      .deleteTags(obj.id)
      .then(() => {
        tagsListCopy.splice(index, 1);
        this.setState({
          tagsList: tagsListCopy
        });
      })
      .catch(error => error);
  };

  /**
   * @returns Components.
   * @memberof Main
   */
  render() {
    return (
      <div className="container tags-container">
        <Header />
        <AddTags onSubmitTags={this.onSubmitTags} />
        <DisplayTagsList
          tagsList={this.state.tagsList}
          removeTags={this.removeTags}
          editTag={this.editTag}
        />
      </div>
    );
  }
}

export default Main;
