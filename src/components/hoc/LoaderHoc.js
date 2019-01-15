import React from 'react';

/**
 * Hoc to display loader if data is not available.
 *
 * @param {component}  WrappedComponent
 * @returns Wrapped component or nothing to display text based on the data is empty or not.
 */
const withLoader = WrappedComponent => {
  return class withLoader extends React.Component {
    /**
     * @returns WrappedComponent if data is not empty else returns nothing to display text.
     */
    render() {
      const data = this.props.todos || this.props.tagsList;

      return data.length !== 0 ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div className="default-text">no todo to display</div>
      );
    }
  };
};

export default withLoader;
