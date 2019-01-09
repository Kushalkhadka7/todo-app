import React from 'react';

class InputHandler extends React.PureComponent {
  render() {
    const { submitInput, inputRef } = this.props;
    return (
      <div className="row navcontainer">
        <div className="col-md-12 input-container">
          <div className="input-group mb-3">
            <input
              type="text"
              onKeyUp={e => submitInput(e)}
              placeholder="your text here"
              ref={inputRef}
              aria-label="First name"
              className="form-control input-todo"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={e => submitInput(e)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputHandler;
