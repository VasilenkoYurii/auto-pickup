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
    padding: 8px;
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
`;
