import { useState } from 'react';
import './style.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const ModalUI = () => {
  //   let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //   const afterOpenModal = () => {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   };

  return (
    <div>
      <button onClick={openModal}>open modal</button>
      <Modal
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'auto')}
        className="checkout-modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
        <button onClick={() => (closeModal(), navigate('/'))}>
          BACK TO HOME
        </button>
      </Modal>
    </div>
  );
};

export default ModalUI;
