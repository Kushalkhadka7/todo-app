import React from 'react';

/**
 * hoc to display loader if data is not available
 * @export
 * @param {Component} => component passed
 * @returns wrapped component with conditions
 */

const withLoader = WrappedComponent => {
  return class withLoader extends React.Component {
    render() {
      let data = this.props.todos;
      return data.length !== 0 ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div className="default-text">no todo to display</div>
      );
    }
  };
};

export default withLoader;
