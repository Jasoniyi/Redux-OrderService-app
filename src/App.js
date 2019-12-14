import React, { Component } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon
} from "mdbreact";
import { MDBTable, MDBTableHead } from "mdbreact";
import "./index.css";

import OrderLists from "./components/OrderLists";
import CreateOrder from "./components/CreateOrder";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow className="mt-4">
          <MDBCol lg="12">
            <MDBCard>
              <MDBCardHeader className="card-header">
                <div className="card-header-style">
                  <h2>Order details</h2>

                  <div className="left">
                    <CreateOrder />
                    <MDBBtn
                      className="btn-style"
                      onClick={() => document.location.reload()}
                    >
                      <i>
                        <MDBIcon icon="sync" className="mr-1" />
                      </i>{" "}
                      Refresh List
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBTable>
                  <MDBTableHead textBlack>
                    <tr className="center">
                      <th>#</th>
                      <th>Customer</th>
                      <th>Location</th>
                      <th>Order Date</th>
                      <th>Status</th>
                      <th>Net Amount</th>
                      <th>Action</th>
                    </tr>
                  </MDBTableHead>

                  <OrderLists />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
