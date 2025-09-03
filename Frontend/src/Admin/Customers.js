import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Modal, Button, Form, Pagination } from 'react-bootstrap';

function Customers() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Sample customer data
  const customers = [
    { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Alice Brown', age: 29, city: 'Houston' },
    { id: 5, name: 'Charlie Davis', age: 38, city: 'Phoenix' },
    { id: 6, name: 'Emma Wilson', age: 31, city: 'Philadelphia' },
    { id: 7, name: 'Mike Taylor', age: 52, city: 'San Antonio' },
  ];

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="h5 fw-light text-success mb-3"><i className="fa fa-users"></i> Customers</div>
      
      <div className="d-flex justify-content-between mb-3">
        <button type="button" className="btn btn-primary rounded-0" onClick={handleShow}>
          <i className='fa fa-plus'></i> Add Customer
        </button>
        <Form className="d-flex" style={{ width: '300px' }}>
          <Form.Control
            type="search"
            placeholder="Search by name or city"
            className="me-2 rounded-0"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </Form>
      </div>

      <div className='table-responsive'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.city}</td>
                <td className='text-center'>
                  <div className="">
                    <button type="button" className="btn rounded-0 btn-primary">
                      <i className='fa fa-eye'></i> View
                    </button>
                    <button type="button" className="btn rounded-0 btn-danger">
                      <i className='fa fa-trash'></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination className="justify-content-center">
          <Pagination.First 
            onClick={() => handlePageChange(1)} 
            disabled={currentPage === 1}
          />
          <Pagination.Prev 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          />
          <Pagination.Last 
            onClick={() => handlePageChange(totalPages)} 
            disabled={currentPage === totalPages}
          />
        </Pagination>

        <Modal className='modal-lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
          <div className="row">

            {/* first row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="fname" placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Middle Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Last Name"
                required
              />
            </div>
            {/* second row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Email Address"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Address"
                required
              />
            </div>
            {/* third row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="age" placeholder="Age"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <select
                className="form-select  rounded-3 border-1"
                id="select"
                required
              >
                <option  selected hidden>Merital Status</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <select
                className="form-select  rounded-3 border-1"
                id="select"
                required
              >
                <option value="" selected hidden>Sex</option>
                <option value="">Male</option>
                <option value="">Femal</option>
              </select>
            </div>
            {/* fourth row */}
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Nationality"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Accupation"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="ZanId"
                required
              />
            </div>
            {/* fifth row */}
             <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="House Number"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="Password"
                required
              />
            </div>
            <div className="col-md-6 col-sm-6 col-6  col-xl-4 mb-3">
              <input
                type="text"
                className="form-control  rounded-3 border-1"
                id="text" placeholder="User Name"
                required
              />
            </div>
           
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-success w-50  rounded-3  mb-3"
              >
                Register
              </button>
            </div>
          </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Customers;