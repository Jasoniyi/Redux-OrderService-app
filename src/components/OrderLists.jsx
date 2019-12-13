import React from "react";
import { connect } from "react-redux";
import OrderItem from "./OrderItem";
import { MDBTableBody } from "mdbreact";

const OrderLists = props => {
  console.log("state", props.orderList);
  let order = props.orderList;
  const OrdersList = order.map((order, i) => (
    <OrderItem key={i} order={order} />
  ));
  return <MDBTableBody>{OrdersList}</MDBTableBody>;
};

const mapStateToProps = state => {
  return {
    orderList: state
  };
};

export default connect(mapStateToProps, null)(OrderLists);
