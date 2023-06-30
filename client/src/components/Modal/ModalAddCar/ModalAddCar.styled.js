import styled from '@emotion/styled';
import { Form, Input } from 'antd';

export const ModalBackground = styled.div`
  width: 400px;
  height: 450px;
  padding-top: 50px;
  padding-left: 70px;

  /* display: flex;

  align-items: center;
  justify-content: center; */

  background-color: #fff;
`;

export const StyledForm = styled(Form)`
  /* width: 350px; */

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const StyledFormItem = styled(Form.Item)`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const StyledFormInput = styled(Input)`
  width: 100%;
`;
