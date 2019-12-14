import React, { useState } from "react";
import faker from "faker";
import { connect } from "react-redux";
import { deleteOrder } from "./Action";

const OrderItem = props => {
  const [color, setColor] = useState("#adff2f");
  const { id, customer, location, orderDate, status, netAmount } = props.order;

  return (
    <>
      <tr className="center">
        <td>{id}</td>
        <td>
          <img
            src={faker.image.avatar()}
            alt="avatar"
            className="img-rounded"
          />
          {customer}
        </td>
        <td>{location}</td>
        <td>{orderDate}</td>
        <td className="status-wrapper">
          <div className="status" style={{ backgroundColor: color }}></div>
          <div>{status}</div>
        </td>
        <td>${netAmount}</td>
        <td>
          <i className="fas fa-trash" onClick={() => props.deleteOrder(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default connect(null, { deleteOrder })(OrderItem);
