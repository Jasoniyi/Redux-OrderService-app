export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";

export const addOrder = (customer, location, orderDate, status, netAmount) => {
  return {
    type: ADD_ORDER,
    customer,
    location,
    orderDate,
    status,
    netAmount
  };
};

export const deleteOrder = id => {
  return {
    type: DELETE_ORDER,
    id
  };
};

export const updateOrder = (
  id,
  customer,
  location,
  orderDate,
  status,
  netAmount
) => {
  return {
    type: UPDATE_ORDER,
    id,
    customer,
    location,
    orderDate,
    status,
    netAmount
  };
};
