import { useDispatch } from 'react-redux';
import { deleteCar } from 'redux/operations';

import {
  MadalBackgroundDelite,
  ModalPrgDelite,
  ModalDeliteButtonYes,
  ModalDeliteButtonNo,
  ButtonContaiber,
} from './ModalDelete.styled';

export const ModalDelete = ({ closeModal, dataForModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteCar(dataForModal._id));
    closeModal();
  };

  return (
    <>
      <MadalBackgroundDelite>
        <ModalPrgDelite>
          Do you want to remove a vehicle from the list?
        </ModalPrgDelite>
        <ButtonContaiber>
          <ModalDeliteButtonYes onClick={handleSubmit}>
            yes
          </ModalDeliteButtonYes>
          <ModalDeliteButtonNo onClick={closeModal}>no</ModalDeliteButtonNo>
        </ButtonContaiber>
      </MadalBackgroundDelite>
    </>
  );
};
