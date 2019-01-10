import React from 'react';
import DisplayList from './DisplayList';

class Incomplete extends React.Component {
  render() {
    return (
      <div>
        <DisplayList todo={this.props.todo} />
      </div>
    );
  }
}

export default Incomplete;
