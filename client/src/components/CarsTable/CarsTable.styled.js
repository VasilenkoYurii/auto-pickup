import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  margin-bottom: 20px;
`;

export const Thead = styled.thead`
  border-collapse: collapse;

  th {
    border: 1px solid black;
    border-radius: 2px;
  }

  th:nth-of-type(1) {
    width: 160px;
  }

  th:nth-of-type(2) {
    width: 160px;
  }

  th:nth-of-type(3) {
    border: 1px solid black;
    padding: 8px;
    padding-left: 100px;
    padding-right: 100px;
  }

  th:nth-of-type(4) {
    width: 150px;
  }
`;

export const Tbody = styled.tbody`
  border-collapse: collapse;

  tr {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: black;
    }
  }

  tr td {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  tr td:nth-of-type(8) {
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const ButtonEdit = styled.button`
  outline: none;

  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  font-size: 14px;
  height: 26px;
  padding: 4px 15px;
  margin-right: 10px;
  border-radius: 6px;

  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: #4096ff;
  }
`;
export const ButtonDelite = styled.button`
  outline: none;

  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  font-size: 14px;
  height: 26px;
  padding: 4px 15px;
  border-radius: 6px;

  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: #eaa6a6;
  }
`;
