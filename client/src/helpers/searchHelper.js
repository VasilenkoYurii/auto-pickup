import { toast } from 'react-hot-toast';
import { carsByReq, allCars } from 'redux/operations';

export const searchHelper = (options, req, dispatch) => {
  if (options === 'All') {
    dispatch(allCars());
    return;
  }
  if (options === 'Available') {
    dispatch(carsByReq({ options: 'availability', req: true }));
    return;
  }
  if (options === 'Not Available') {
    dispatch(carsByReq({ options: 'availability', req: false }));
    return;
  }

  if (req === undefined || req.trim() === '') {
    toast.error('Input must be filled', {
      style: {
        width: '300px',
        height: '50px',
        borderRadius: '10px',
        fontSize: '20px',
      },
    });

    return;
  }

  switch (options) {
    case 'Company':
      dispatch(carsByReq({ options: 'company', req: req.trim() }));
      break;

    case 'Model':
      dispatch(carsByReq({ options: 'model', req: req.trim() }));
      break;

    case 'VIN':
      dispatch(carsByReq({ options: 'vin', req: req.trim() }));
      break;

    case 'Color':
      dispatch(carsByReq({ options: 'color', req: req.trim() }));
      break;

    case 'Year':
      dispatch(carsByReq({ options: 'year', req: req.trim() }));
      break;

    case 'Min year':
      dispatch(carsByReq({ options: 'min_year', req: req.trim() }));
      break;

    case 'Max year':
      dispatch(carsByReq({ options: 'max_year', req: req.trim() }));
      break;

    default:
      break;
  }
};
