import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {handleComponentRender} => function which handles which component to render
 * based on the flags
 */
const Nav = ({ handleComponentRender }) => (
  <div className="row navcontainer navbar">
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderTodoHome')}
      >
        <i className="fas fa-home icons" />
        <div>Home</div>
      </button>
    </div>
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderCompletedTodoLists')}
      >
        <i className="fas fa-check icons" />
        <div>Completed</div>
      </button>
    </div>
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderIncompleteTodoLists')}
      >
        <i className="fas fa-clipboard-list icons" />
        <div>Remaining</div>
      </button>
    </div>
  </div>
);

Nav.propTypes = {
  handleComponentRender: PropTypes.func.isRequired
};

export default Nav;
