import React from 'react';
import PropTypes from 'prop-types';

const NavComponent = ({ handleComponent }) => (
  <div className="row navcontainer navbar">
    <div className="col-md-4">
      <button className="btn" onClick={() => handleComponent('home')}>
        Home
      </button>
    </div>
    <div className="col-md-4">
      <button className="btn" onClick={() => handleComponent('completed')}>
        Completed
      </button>
    </div>
    <div className="col-md-4">
      <button className="btn" onClick={() => handleComponent('incomplete')}>
        Incomplete
      </button>
    </div>
  </div>
);

NavComponent.propTypes = {
  handleComponent: PropTypes.func.isRequired
};

export default NavComponent;
