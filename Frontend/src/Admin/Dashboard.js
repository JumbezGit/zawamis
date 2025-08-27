import React from "react";
import Header from "./Header";
import Nav from "./Nav";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="text-center h5 text-success"> Dashboard </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className=" p-1 bg-success my-cursor text-white ">
              <div className="row text-center">
                <div className="fa fa-users fa-2x my-2"></div>
                <h5 className="text-center fw-light">Total Customers</h5>
                <div className="text-center">100</div>
              </div>
          </div>
          </div>

         <div className="col-md-3 mb-3">
            <div className=" p-1 bg-primary my-cursor text-white ">
              <div className="row text-center">
                <div className="fa fa-shop fa-2x my-2"></div>
                <h5 className="text-center fw-light">Total Stations</h5>
                <div className="text-center">100</div>
              </div>
          </div>
          </div>

         <div className="col-md-3 mb-3">
            <div className=" p-1 bg-danger my-cursor text-white ">
              <div className="row text-center">
                <div className="fa fa-id-badge fa-2x my-2"></div>
                <h5 className="text-center fw-light">Total Staff</h5>
                <div className="text-center">100</div>
              </div>
          </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className=" p-1 bg-warning my-cursor text-dark ">
              <div className="row text-center">
                <div className="fa fa-users fa-2x my-2"></div>
                <h5 className="text-center fw-light">Total Users</h5>
                <div className="text-center">100</div>
              </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
