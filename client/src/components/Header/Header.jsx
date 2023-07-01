import { useState } from 'react';
import { Select, Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { HeaderContainer, ButtonAddCar } from './Header.styled';
import { searchHelper } from 'helpers/searchHelper';

export const Header = ({
  hendleChengePerPage,
  hendleSettingsModal,
  perPage,
}) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState('All');
  const [form] = Form.useForm();

  const handleOptionChange = value => {
    setOptions(value);
  };

  const handleSearch = value => {
    searchHelper(options, value.req, dispatch);
  };

  return (
    <HeaderContainer>
      <Select
        defaultValue={options}
        style={{ width: 120 }}
        onChange={handleOptionChange}
        options={[
          { value: 'All', label: 'All' },
          { value: 'Company', label: 'Company' },
          { value: 'Model', label: 'Model' },
          { value: 'VIN', label: 'VIN' },
          { value: 'Color', label: 'Color' },
          {
            label: 'Year',
            options: [
              { label: 'Year', value: 'Year' },
              { label: 'Min year', value: 'Min year' },
              { label: 'Max year', value: 'Max year' },
            ],
          },
          {
            label: 'Availability',
            options: [
              { label: 'Available', value: 'Available' },
              { label: 'Not Available', value: 'Not Available' },
            ],
          },
        ]}
      />
      <Form form={form} layout="inline" onFinish={handleSearch}>
        <Form.Item name="req">
          <Input
            placeholder="input placeholder"
            disabled={
              options === 'Not Available' ||
              options === 'Available' ||
              options === 'All'
                ? true
                : false
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>

      <ButtonAddCar
        onClick={() => {
          hendleSettingsModal('add', null);
        }}
      >
        Add car
      </ButtonAddCar>

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
