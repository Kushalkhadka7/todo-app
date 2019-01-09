import React from 'react';

class NavComponent extends React.PureComponent {
  render() {
    const { handleComponent } = this.props;
    return (
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
  }
}

export default NavComponent;
