import React from "react";
import { IoPeople } from 'react-icons/io5';
function Dashboard() {
  return (
    <div className="container">
      <div className="h5 fw-light text-success mb-3"><i className="fa fa-home"></i>nyumbani</div>
      <div className="row">

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-light rounded-4 my-cursor">
            <div className="card-body p-3">
              <div className="row  ">
                   <h4><IoPeople/></h4>
                <div>Customeres</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-light rounded-4 my-cursor">
            <div className="card-body p-3">
              <div className="row p-0 ">
              <h4><IoPeople/></h4>
                <div>Stations</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-light rounded-4 my-cursor">
            <div className="card-body p-3">
              <div className="row  ">
               <h4><IoPeople/></h4>
                <div>Deptors</div>
                <div className="text-end h5 ">100</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6  mb-3">
          <div className="card bg-light rounded-4 my-cursor">
            <div className="card-body p-3">
              <div className="row  ">
                <h4><IoPeople/></h4>
                <div>Wells</div>
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
