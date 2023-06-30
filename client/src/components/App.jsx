import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';

import { CarsTable } from './CarsTable/CarsTable';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

import cars from './cars.json';

export const App = () => {
  // const dispatch = useDispatch();
  const [perPage, setPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setTypeModal] = useState('');
  const [dataForModal, setDataForModal] = useState(null);

  // const carsData = useSelector(selectCars);

  // console.log(carsData);

  // useEffect(() => {
  //   dispatch(addCars());
  // }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const hendleSettingsModal = (type, data) => {
    setTypeModal(type);
    setDataForModal(data);
    setShowModal(true);
  };

  const hendleChengePerPage = value => {
    setPerPage(value);
  };

  return (
    <>
      <Header
        hendleChengePerPage={hendleChengePerPage}
        hendleSettingsModal={hendleSettingsModal}
        perPage={perPage}
      />
      <CarsTable
        data={cars}
        perPage={perPage}
        openModal={openModal}
        hendleSettingsModal={hendleSettingsModal}
      />
      {showModal && (
        <Modal
          closeModal={closeModal}
          modalType={modalType}
          dataForModal={dataForModal}
        />
      )}
    </>
  );
};
