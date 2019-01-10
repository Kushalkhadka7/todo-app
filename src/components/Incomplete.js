import React from 'react';

import DisplayList from './DisplayList';

const Incomplete = props => {
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
  } = props;

  function mapInCompleted() {
    return todo.filter(value => value.isCompleted === false);
  }

  return (
    <div>
      <DisplayList
        isEdited={isEdited}
        editIndex={editIndex}
        todo={mapInCompleted()}
        inputValue={inputValue}
        submitInput={submitInput}
        handleDelete={handleDelete}
        handleSelected={handleSelected}
        handleTextChange={handleTextChange}
        handleEdition={handleEdition}
      />
    </div>
  );
};

export default Incomplete;
