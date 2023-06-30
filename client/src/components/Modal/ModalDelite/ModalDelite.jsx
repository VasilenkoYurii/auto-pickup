import {
  MadalBackgroundDelite,
  ModalPrgDelite,
  ModalDeliteButtonYes,
  ModalDeliteButtonNo,
  ButtonContaiber,
} from './ModalDelite.styled';

export const ModalDelite = ({ closeModal }) => {
  return (
    <>
      <MadalBackgroundDelite>
        <ModalPrgDelite>
          Do you want to remove a vehicle from the list?
        </ModalPrgDelite>
        <ButtonContaiber>
          <ModalDeliteButtonYes>yes</ModalDeliteButtonYes>
          <ModalDeliteButtonNo onClick={closeModal}>no</ModalDeliteButtonNo>
        </ButtonContaiber>
      </MadalBackgroundDelite>
    </>
  );
};
