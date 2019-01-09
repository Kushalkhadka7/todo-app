import React from 'react';
import DisplayList from './DisplayList';

class Incomplete extends React.Component {
  render() {
    return (
      <div>
        <DisplayList todo={this.props.incomplete} />
      </div>
    );
  }
}

export default Incomplete;
