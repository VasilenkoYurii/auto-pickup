import { Button, Form, Input, Radio, Select } from 'antd';
import { nanoid } from 'nanoid';
import { ModalBackground, StyledForm } from './ModalEdit.styled';

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
  const onFinish = values => {
    const userCar = {
      ...values,
      id: nanoid(),
    };
    console.log('Form values:', userCar);
    closeModal();
  };

  return (
    <ModalBackground>
      <StyledForm
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        initialValues={dataForModal}
      >
        <Form.Item label="Company" name="car">
          <Input disabled={true} value={dataForModal.car} />
        </Form.Item>

        <Form.Item label="Model" name="car_model">
          <Input disabled={true} value={dataForModal.car_model} />
        </Form.Item>

        <Form.Item label="VIN" name="car_vin">
          <Input disabled={true} value={dataForModal.car_vin} />
        </Form.Item>

        <Form.Item label="Year" name="car_model_year">
          <Input disabled={true} value={dataForModal.car_model_year} />
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
          rules={[{ required: true, message: 'Required area' }]}
        >
          <Input value={dataForModal.price} />
        </Form.Item>

        <Form.Item label="Availability" name="availability">
          <Radio.Group>
            <Radio value={false}>Not Available</Radio>
            <Radio value={true}>Available</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </ModalBackground>
  );
};
