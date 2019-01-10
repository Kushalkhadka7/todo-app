import React from 'react';
import PropTypes from 'prop-types';

import InputHandler from './InputHandler';
import DisplayList from './DisplayList';

class HomeComponent extends React.Component {
  render() {
    const {
      inputRef,
      submitInput,
      todo,
      handleDelete,
      handleSelected,
      checkboxRef,
      openModal
    } = this.props;
    return (
      <div>
        <InputHandler inputRef={inputRef} submitInput={submitInput} />
        <DisplayList
          todo={todo}
          handleDelete={handleDelete}
          handleSelected={handleSelected}
          checkboxRef={checkboxRef}
          openModal={openModal}
        />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  inputRef: PropTypes.any.isRequired,
  submitInput: PropTypes.func,
  todo: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  handleSelected: PropTypes.func,
  checkboxRef: PropTypes.any.isRequired,
  openModal: PropTypes.func
};

export default HomeComponent;
