import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";

import { connect } from "react-redux";
import { addOrder } from "./Action";

const CreateOrder = props => {
  const [modal, setModal] = useState(false);
  // const [toBeSaved, setToBeSaved] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState([
    "Choose your Order",
    "Cancelled",
    "Shipped",
    "Pending",
    "Delivered"
  ]);
  const [netAmount, setNetAmount] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleLocationChange = e => {
    setLocation(e.target.value);
  };

  const handleOrderDateChange = e => {
    setOrderDate(e.target.value);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const handleNetAmountChange = e => {
    setNetAmount(e.target.value);
  };

  // const handleChange = field => event =>
  //   setToBeSaved(([field]: event.target.value));

  console.log(props);
  return (
    <div>
      <MDBContainer>
        <MDBBtn onClick={toggle}>Create Order</MDBBtn>
        <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Customer's name"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={name}
                  onChange={handleNameChange}
                />
                <MDBInput
                  label="Location"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  value={location}
                  onChange={handleLocationChange}
                />
                <MDBInput
                  label="Order Date"
                  group
                  type="date"
                  validate
                  error="wrong"
                  success="right"
                  value={orderDate}
                  onChange={handleOrderDateChange}
                />

                <select
                  className="browser-default custom-select"
                  // value={status}
                  // onChange={handleStatusChange}
                >
                  {/* <option>Choose your order status</option> */}
                  {status.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>

                <MDBInput
                  label="Net Amount"
                  group
                  type="number"
                  validate
                  value={netAmount}
                  onChange={handleNetAmountChange}
                />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="primary"
              onClick={() => {
                props.addOrder(name, location, orderDate, status, netAmount);
                setName("");
                setLocation("");
                setOrderDate("");
                setStatus("");
                setNetAmount("");
                setModal(false);
              }}
            >
              Create New Order
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {(
//     de
//   )}
// }

export default connect(null, { addOrder })(CreateOrder);
