import { Button, Form, Input, Radio, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { editCar } from 'redux/operations';
import {
  ModalBackground,
  StyledForm,
  FormContainer,
  ModalTitle,
  SubmitButton,
} from './ModalEdit.styled';

const colors = [
  'Yellow',
  'Maroon',
  'Red',
  'Violet',
  'Purple',
  'Indigo',
  'Teal',
  'Pink',
  'Aquamarine',
  'Green',
  'Mauv',
  'Turquoise',
  'Blue',
  'Puce',
  'Orange',
  'Khaki',
  'Fuscia',
  'Goldenrod',
  'Crimson',
];

export const ModalEdit = ({ closeModal, dataForModal }) => {
  const dispatch = useDispatch();

  const onFinish = values => {
    const userCar = {
      ...values,
      _id: dataForModal._id,
      price: `$${values.price}`,
    };
    dispatch(editCar(userCar));
    closeModal();
  };

  const validatePrice = (_, value) => {
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      return Promise.reject('Please enter a valid price');
    }
    return Promise.resolve();
  };

  const initialData = {
    ...dataForModal,
    price: dataForModal.price.substring(1),
  };

  return (
    <ModalBackground>
      <ModalTitle>Edit car</ModalTitle>

      <FormContainer>
        <StyledForm
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          initialValues={initialData}
        >
          <Form.Item label="Company" name="car">
            <Input disabled={true} />
          </Form.Item>

          <Form.Item label="Model" name="car_model">
            <Input disabled={true} />
          </Form.Item>

          <Form.Item label="VIN" name="car_vin">
            <Input disabled={true} />
          </Form.Item>

          <Form.Item label="Year" name="car_model_year">
            <Input disabled={true} />
          </Form.Item>

          <Form.Item label="Color" name="car_color">
            <Select>
              {colors.map(color => {
                return (
                  <Select.Option value={color} key={color}>
                    {color}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: 'Required area' },
              { validator: validatePrice },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Availability" name="availability">
            <Radio.Group>
              <Radio value={false}>Not Available</Radio>
              <Radio value={true}>Available</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <SubmitButton type="primary" htmlType="submit">
              Submit
            </SubmitButton>
          </Form.Item>
        </StyledForm>
      </FormContainer>
    </ModalBackground>
  );
};
