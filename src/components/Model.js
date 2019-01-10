import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import InputHandler from './InputHandler';

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
          <button className="model-button" onClick={closeModal}>
            {this.showModel()}
            close
            </button>
          <div className="model-content">
            <InputHandler />
            
          </div>
        </Modal>
      </div>
    );
  }
}

export default Model;
