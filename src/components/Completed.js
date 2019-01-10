import React from 'react';
import DisplayList from './DisplayList';

const Completed = props => {
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

  function mapCompleted() {
    return todo.filter(value => value.isCompleted === true);
  }

  return (
    <div>
      <DisplayList
        isEdited={isEdited}
        editIndex={editIndex}
        todo={mapCompleted()}
        inputValue={inputValue}
        submitInput={submitInput}
        handleDelete={handleDelete}
        handleEdition={handleEdition}
        handleSelected={handleSelected}
        handleTextChange={handleTextChange}
      />
    </div>
  );
};

export default Completed;
