import React from 'react';
import PropTypes from 'prop-types';

import DisplayList from './DisplayList';
import InputHandler from './InputHandler';

class HomeComponent extends React.Component {
  render() {
    const {
      todo,
      isEdited,
      editIndex,
      inputValue,
      submitInput,
      handleDelete,
      handleEdition,
      handleSelected,
      handleTextChange
    } = this.props;

    return (
      <div>
        <InputHandler
          isEdited={isEdited}
          inputValue={inputValue}
          submitInput={submitInput}
          handleTextChange={handleTextChange}
        />
        <DisplayList
          todo={todo}
          isEdited={isEdited}
          editIndex={editIndex}
          handleDelete={handleDelete}
          handleEdition={handleEdition}
          handleSelected={handleSelected}
        />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  submitInput: PropTypes.func,
  handleDelete: PropTypes.func,
  handleSelected: PropTypes.func,
  todo: PropTypes.array.isRequired
};

export default HomeComponent;
