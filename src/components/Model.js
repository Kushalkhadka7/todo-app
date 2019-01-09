import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '40%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');
class Model extends React.Component {
  showModel = () => {
    console.log(this.props.data);
  };
  render() {
    const { afterOpenModal, closeModal, modelToggle } = this.props;
    return (
      <div>
        <Modal
          isOpen={modelToggle}
          onAfterOpen={afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
            <button className="model-button" onClick={closeModal}>
              {this.showModel()}
              close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Model;
