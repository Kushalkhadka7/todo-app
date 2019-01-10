import React from 'react';
import PropTypes from 'prop-types';

import DisplayList from './DisplayList';
import InputHandler from './InputHandler';

class HomeComponent extends React.Component {
  render() {
    const {
      todo,
      isEdited,
      inputValue,
      submitInput,
      handleDelete,
      handleSelected,
      handleTextChange,
      handleEdition
    } = this.props;

    return (
      <div>
        <InputHandler
          inputValue={inputValue}
          handleTextChange={handleTextChange}
          submitInput={submitInput}
          isEdited={isEdited}
        />
        <DisplayList
          todo={todo}
          handleDelete={handleDelete}
          handleSelected={handleSelected}
          isEdited={isEdited}
          handleEdition={handleEdition}
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
