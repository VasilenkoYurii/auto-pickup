import { Button, Form, Input, Radio, Select } from 'antd';
import { nanoid } from 'nanoid';
import { ModalBackground, StyledForm } from './ModalAddCar.styled';

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

export const ModalAddCar = ({ closeModal }) => {
  const onFinish = values => {
    const userCar = {
      ...values,
      price: `$${values.price}`,
      id: nanoid(),
    };
    console.log('Form values:', userCar);
    closeModal();
  };

  const validatePrice = (_, value) => {
    if (!value) {
      return Promise.reject('Please enter a price');
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      return Promise.reject('Please enter a valid price');
    }
    return Promise.resolve();
  };

  return (
    <ModalBackground>
      <StyledForm
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Company"
          name="car"
          rules={[{ required: true, message: 'Required area' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Model"
          name="car_model"
          rules={[{ required: true, message: 'Required area' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="VIN"
          name="car_vin"
          rules={[{ required: true, message: 'Required area' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Year"
          name="car_model_year"
          rules={[{ required: true, message: 'Required area' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Color"
          name="car_color"
          rules={[{ required: true, message: 'Required area' }]}
        >
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

        <Form.Item
          label="Availability"
          name="availability"
          rules={[{ required: true, message: 'Required area' }]}
        >
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
