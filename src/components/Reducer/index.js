import { INITIAL_DATA } from "../initialData";
import { ADD_ORDER, DELETE_ORDER, UPDATE_ORDER } from "../Action";

const MainReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const { customer, location, orderDate, status, netAmount } = action;
      return [
        ...state,
        {
          id: Math.max(...state.map(o => o.id)) + 1,
          customer,
          location,
          orderDate,
          status,
          netAmount
        }
      ];

    case DELETE_ORDER:
      return state.filter(orderItem => orderItem.id !== action.id);

    case UPDATE_ORDER:
      //   const { customer, location, orderDate, status, netAmount } = action;
      return state.map(orderItem => {
        if (orderItem.id === action.id) {
          return {
            customer,
            location,
            orderDate,
            status,
            netAmount
          };
        }
        return orderItem;
      });

    default:
      return state;
  }
};

export default MainReducer;
