import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Space, Divider, Button } from 'antd';
import {
  Main,
  Thead,
  Tbody,
  Table,
  ButtonEdit,
  ButtonDelite,
  ContainerForButton,
} from './CarsTable.styled';
import { Pagination } from 'components/Pagination/Pagination';

export const CarsTable = ({ data, perPage, hendleSettingsModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    setFilteredData(data);
    setTotalPages(Math.ceil(data.length / perPage));
    setCurrentPage(0);
  }, [data, perPage]);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredDataPaginated = filteredData.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <Main>
      <div ref={tableRef}>
        <Table>
          <Thead>
            <tr>
              <th>Company</th>
              <th>Model</th>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </Thead>
          <Tbody>
            {filteredDataPaginated.map(car => (
              <tr key={car._id}>
                <td>{car.car}</td>
                <td>{car.car_model}</td>
                <td>{car.car_vin}</td>
                <td>{car.car_color}</td>
                <td>{car.car_model_year}</td>
                <td>{car.price}</td>
                <td>{car.availability ? 'Available' : 'Not Available'}</td>
                <td>
                  <Dropdown
                    dropdownRender={menu => (
                      <div>
                        <Divider style={{ margin: 0 }} />
                        <ContainerForButton style={{ padding: 8 }}>
                          <ButtonEdit
                            onClick={() => {
                              hendleSettingsModal('edit', car);
                            }}
                          >
                            Edit
                          </ButtonEdit>
                          <ButtonDelite
                            onClick={() => {
                              hendleSettingsModal('delite', car);
                            }}
                          >
                            Delite
                          </ButtonDelite>
                        </ContainerForButton>
                      </div>
                    )}
                  >
                    <Button
                      onClick={e => {
                        e.preventDefault();
                      }}
                    >
                      <Space>Action</Space>
                    </Button>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </div>

      <div>
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </Main>
  );
};
