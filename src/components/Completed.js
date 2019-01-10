import React from 'react';
import DisplayList from './DisplayList';

const Completed = ({ props }) => (
  <div>
    <DisplayList todo={props.todo} />
  </div>
);

export default Completed;
