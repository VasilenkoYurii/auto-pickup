import { toast } from 'react-hot-toast';
import { carsByReq } from 'redux/operations';

export const searchHelper = (options, req, dispatch) => {
  if (options === 'Available') {
    dispatch(carsByReq({ options: 'availability', req: true }));
    return;
  }
  if (options === 'Not Available') {
    dispatch(carsByReq({ options: 'availability', req: false }));
    return;
  }

  if (req === undefined) {
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
      dispatch(carsByReq({ options: 'company', req }));
      break;

    case 'Model':
      dispatch(carsByReq({ options: 'model', req }));
      break;

    case 'VIN':
      dispatch(carsByReq({ options: 'vin', req }));
      break;

    case 'Color':
      dispatch(carsByReq({ options: 'color', req }));
      break;

    case 'Year':
      dispatch(carsByReq({ options: 'year', req }));
      break;

    case 'Min year':
      dispatch(carsByReq({ options: 'min_year', req }));
      break;

    case 'Max year':
      dispatch(carsByReq({ options: 'max_year', req }));
      break;

    default:
      break;
  }
};
