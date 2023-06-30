import styled from '@emotion/styled';

export const MadalBackgroundDelite = styled.div`
  width: 400px;
  height: 150px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalPrgDelite = styled.p`
  font-size: 16px;
  padding-top: 25px;
`;

export const ButtonContaiber = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const ModalDeliteButtonYes = styled.button`
  outline: none;
  text-transform: uppercase;

  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  height: 32px;

  padding: 4px 15px;
  margin-right: 10px;
  border-radius: 6px;

  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: #eaa6a6;
  }
`;

export const ModalDeliteButtonNo = styled.button`
  outline: none;
  text-transform: uppercase;

  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;

  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    background-color: #16ff6885;
  }
`;
