import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-hot-toast';
import {
  addCars,
  // addOrder,
  // decrementQuantityOrder,
  // incrementQuantityOrder,
  // makeAnOrder,
  // findOrdersByEmail,
  // findOrdersByPhone,
} from './operations';

const initialState = {
  carsData: [],
  // userOrder: [],
  // findOrders: [],
};

export const userSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addCars.fulfilled, (state, { payload }) => {
        state.carsData = payload;
      })
      .addCase(addCars.rejected, () => {
        console.log('wa');
      });
    // .addCase(addOrder.fulfilled, (state, { payload }) => {
    //   const arrOrder = JSON.parse(JSON.stringify(state.userOrder));

    //   if (arrOrder.length !== 0 && arrOrder[0].shop !== payload.shop) {
    //     toast.error(
    //       'You can only choose a product from one store at a time',
    //       {
    //         style: {
    //           width: '400px',
    //           height: '50px',
    //           borderRadius: '10px',
    //           fontSize: '20px',
    //         },
    //       }
    //     );
    //     return;
    //   }

    //   const updatedOrder = addQuantityToObjectArray([
    //     ...state.userOrder,
    //     payload,
    //   ]);
    //   state.userOrder = updatedOrder;
    //   toast.success('Successfully added to shopping cart!', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(decrementQuantityOrder.fulfilled, (state, { payload }) => {
    //   const updatedOrder = decrementQuantity(
    //     JSON.parse(JSON.stringify(state.userOrder)),
    //     payload._id
    //   );
    //   state.userOrder = updatedOrder;
    //   toast.success('Successfully increased quantity!', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(incrementQuantityOrder.fulfilled, (state, { payload }) => {
    //   const updatedOrder = incrementQuantity(
    //     JSON.parse(JSON.stringify(state.userOrder)),
    //     payload._id
    //   );
    //   state.userOrder = updatedOrder;
    //   toast.success('Successfully reduced quantity!', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(makeAnOrder.fulfilled, (state, { payload }) => {
    //   state.userOrder = [];

    //   toast.success('Order sent successfully!', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(makeAnOrder.rejected, () => {
    //   toast.error('Something went wrong', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(findOrdersByEmail.fulfilled, (state, { payload }) => {
    //   state.findOrders = payload;
    //   if (payload.length === 0) {
    //     toast.error('There were no orders from this email!', {
    //       style: {
    //         width: '300px',
    //         height: '50px',
    //         borderRadius: '10px',
    //         fontSize: '20px',
    //       },
    //     });
    //   } else {
    //     toast.success('We managed to find your orders!', {
    //       style: {
    //         width: '300px',
    //         height: '50px',
    //         borderRadius: '10px',
    //         fontSize: '20px',
    //       },
    //     });
    //   }
    // })
    // .addCase(findOrdersByEmail.rejected, () => {
    //   toast.error('Something went wrong', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // })
    // .addCase(findOrdersByPhone.fulfilled, (state, { payload }) => {
    //   state.findOrders = payload;
    //   if (payload.length === 0) {
    //     toast.error('There were no orders from this phone!', {
    //       style: {
    //         width: '300px',
    //         height: '50px',
    //         borderRadius: '10px',
    //         fontSize: '20px',
    //       },
    //     });
    //   } else {
    //     toast.success('We managed to find your orders!', {
    //       style: {
    //         width: '300px',
    //         height: '50px',
    //         borderRadius: '10px',
    //         fontSize: '20px',
    //       },
    //     });
    //   }
    // })
    // .addCase(findOrdersByPhone.rejected, () => {
    //   toast.error('Something went wrong', {
    //     style: {
    //       width: '300px',
    //       height: '50px',
    //       borderRadius: '10px',
    //       fontSize: '20px',
    //     },
    //   });
    // });
  },
});

// findOrdersByPhone
