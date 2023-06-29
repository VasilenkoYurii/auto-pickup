import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';

import { CarsTable } from './CarsTable/CarsTable';
import { Header } from './Header/Header';

import cars from './cars.json';

export const App = () => {
  // const dispatch = useDispatch();
  const [perPage, setPerPage] = useState(20);
  const carsData = useSelector(selectCars);

  // console.log(carsData);

  // useEffect(() => {
  //   dispatch(addCars());
  // }, []);

  const hendleChengePerPage = value => {
    setPerPage(value);
  };

  return (
    <>
      <Header hendleChengePerPage={hendleChengePerPage} perPage={perPage} />
      <CarsTable data={cars} perPage={perPage} />
    </>
  );
};
