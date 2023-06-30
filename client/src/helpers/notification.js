import { toast } from 'react-hot-toast';

export const wentWrongNotify = () => {
  toast.error('Something went wrong', {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};

export const notFindNotify = () => {
  toast.error(`We couldn't find anything for your request`, {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};

export const successFindNotify = number => {
  toast.success(
    `We managed to find ${number} cars according to your request!`,
    {
      style: {
        width: '300px',
        height: '50px',
        borderRadius: '10px',
        fontSize: '20px',
      },
    }
  );
};

export const successDelite = () => {
  toast.success(`The machine has been successfully removed from the list!`, {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};

export const successEdit = () => {
  toast.success(`Changes made successfully!`, {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};

export const successAdd = () => {
  toast.success(`You have successfully added a vehicle to the list!`, {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};
