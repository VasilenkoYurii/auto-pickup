import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;

  box-shadow: 8px 0px 13px -6px rgba(0, 0, 0, 0.75);
`;

export const ButtonAddCar = styled.button`
  outline: none;

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
    background-color: #16ff6885;
  }
`;
