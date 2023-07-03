import styled from '@emotion/styled';
import { Form, Button } from 'antd';

export const ModalBackground = styled.div`
  width: 400px;
  height: 550px;

  background-color: #fff;
`;

export const StyledForm = styled(Form)``;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;

  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
`;

export const SubmitButton = styled(Button)`
  width: 308px;
`;
