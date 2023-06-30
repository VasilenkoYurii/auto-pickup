import { createPortal } from 'react-dom';
import { Overlay, MainModal } from './Modal.styled';
import { ModalDelete } from './ModalDelete/ModalDelete';
import { ModalEdit } from './ModalEdit/ModalEdit';
import { ModalAddCar } from './ModalAddCar/ModalAddCar';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, modalType, dataForModal }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <MainModal>
        {modalType === 'edit' && (
          <ModalEdit closeModal={closeModal} dataForModal={dataForModal} />
        )}
        {modalType === 'delite' && (
          <ModalDelete closeModal={closeModal} dataForModal={dataForModal} />
        )}
        {modalType === 'add' && <ModalAddCar closeModal={closeModal} />}
      </MainModal>
    </Overlay>,
    modalRoot
  );
};
