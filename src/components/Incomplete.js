import React from 'react';
import DisplayList from './DisplayList';

const Incomplete = ({ props }) => (
  <div>
    <DisplayList todo={props.todo} />
  </div>
);

export default Incomplete;
