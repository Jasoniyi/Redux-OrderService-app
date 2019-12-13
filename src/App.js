import React, { Component } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBIcon
} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
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
                    <MDBBtn className="btn-style">
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
      // <div className="container-fluid">
      //   <div className="row mt-3">
      //     <div className="col-lg-12">
      //       <div className="card">
      //         <div className="card-header">Student Registry</div>
      //         <div className="card-body">
      //           <table className="table table-hover">
      //             <thead className="thead-dark">
      //               <tr>
      //                 <th>Name</th>
      //                 <th>Grade</th>
      //                 <th>School</th>
      //                 <th>Edit/Save</th>
      //                 <th>Delete</th>
      //               </tr>
      //             </thead>
      //             <OrderLists />
      //           </table>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
