import React from "react";
function Dashboard() {
  return (
    <div className="container">
      <div className="h5 fw-light text-success mb-3"><i className="fa fa-home"></i> Home</div>
      <div className="row">

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-warning rounded-4 my-cursor shado border border-left-4">
            <div className="card-body p-3">
              <div className="row  ">
                <i className="fa fa-users fa-2x my-1"></i>
                <div>CUSTOMERS</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-primary text-white rounded-4 my-cursor shado border-0">
            <div className="card-body p-3">
              <div className="row  ">
                <i className="fa fa-users fa-2x my-1"></i>
                <div>CUSTOMERS</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-success text-white rounded-4 my-cursor shado border-0">
            <div className="card-body p-3">
              <div className="row  ">
                <i className="fa fa-users fa-2x my-1"></i>
                <div>CUSTOMERS</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-danger text-white rounded-4 my-cursor shado border-0">
            <div className="card-body p-3">
              <div className="row  ">
                <i className="fa fa-users fa-2x my-1"></i>
                <div>CUSTOMERS</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
