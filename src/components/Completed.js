import React from 'react';
import DisplayList from './DisplayList';

class Completed extends React.Component {
  render() {
    const { completed, handleDelete } = this.props;
    return (
      <div>
        <DisplayList todo={completed} handleDelete={handleDelete} />
      </div>
    );
  }
}

export default Completed;
