import React from 'react';

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

export default HomeComponent;
