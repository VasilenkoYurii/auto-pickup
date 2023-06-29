import { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import { Select, Button, Form, Input } from 'antd';

export const Header = ({ hendleChengePerPage, perPage }) => {
  const [options, setOptions] = useState('Company');
  const [form] = Form.useForm();

  const handleOptionChange = value => {
    console.log(`selected ${value}`);
    setOptions(value);
  };

  return (
    <HeaderContainer>
      <Select
        defaultValue={options}
        style={{ width: 120 }}
        onChange={handleOptionChange}
        options={[
          { value: 'Company', label: 'Company' },
          { value: 'Model', label: 'Model' },
          { value: 'VIN', label: 'VIN' },
          { value: 'Color', label: 'Color' },
          { value: 'Year', label: 'Year' },
          { value: 'Price', label: 'Price' },
          { value: 'Availability', label: 'Availability' },
          { value: 'Actions', label: 'Actions' },
        ]}
      />

      <Form form={form} layout="inline">
        <Form.Item>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>

      <Select
        defaultValue={perPage}
        style={{ width: 70 }}
        onChange={hendleChengePerPage}
        options={[
          { value: 20, label: 20 },
          { value: 40, label: 40 },
          { value: 60, label: 60 },
          { value: 80, label: 80 },
          { value: 100, label: 100 },
        ]}
      />
    </HeaderContainer>
  );
};
