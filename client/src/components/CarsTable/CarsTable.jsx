import React, { useState, useEffect } from 'react';

import { Main, Thead, Tbody, Table } from './CarsTable.styled';
import { Pagination } from 'components/Pagination/Pagination';

export const CarsTable = ({ data, perPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setFilteredData(data);
    setTotalPages(Math.ceil(data.length / perPage));
    setCurrentPage(0);
  }, [data, perPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredDataPaginated = filteredData.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <Main>
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
            <tr key={car.id}>
              <td>{car.car}</td>
              <td>{car.car_model}</td>
              <td>{car.car_vin}</td>
              <td>{car.car_color}</td>
              <td>{car.car_model_year}</td>
              <td>{car.price}</td>
              <td>{car.availability ? 'Available' : 'Not Available'}</td>
              <td>
                <button>Edit</button>
                <button>Delite</button>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>

      <div>
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </Main>
  );
};
