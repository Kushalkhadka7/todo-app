import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ handleComponentRender }) => (
  <div className="row navcontainer navbar">
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderTodoHome')}
      >
        <i class="fas fa-home icons" />
        <div>Home</div>
      </button>
    </div>
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderCompletedTodoLists')}
      >
        <i class="fas fa-check icons" />
        <div>Completed</div>
      </button>
    </div>
    <div className="col-md-4 nav-list">
      <button
        className="btn"
        onClick={() => handleComponentRender('renderIncompleteTodoLists')}
      >
        <i class="fas fa-clipboard-list icons" />
        <div>Incomplete</div>
      </button>
    </div>
  </div>
);

Nav.propTypes = {
  handleComponentRender: PropTypes.func.isRequired
};

export default Nav;
