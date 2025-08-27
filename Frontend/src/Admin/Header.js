import React from "react";
import zawaLogo from "../Imgs/zawaLogo.png";
import Nav from "./Nav";

function Header() {
  return (
       <header className="py-2 bg-white shadow-sm border-bottom mb-3">
          <div
              className="container-fluid d-grid gap- align-items-center"
              style={{ gridTemplateColumns: "1fr 2fr" }}
          >
              <div className="dropdown">
                  <a
                      href="#"
                      className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-white text-white text-decoration-none dropdown-toggle"
                      id="dropdownNavLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                  >
                      <img
                          src={zawaLogo}
                          alt="Zawamis Logo"
                          className="img-fluid"
                          style={{ maxHeight: "40px" }} />
                  </a>
                  <ul
                      className="dropdown-menu text-small shadow"
                      aria-labelledby="dropdownNavLink"
                  >
                      <li>
                          <a
                              className="dropdown-item active"
                              href="#"
                              aria-current="page"
                          >
                              Overview
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">
                              Inventory
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">
                              Customers
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">
                              Products
                          </a>
                      </li>
                      <li>
                          <hr className="dropdown-divider" />
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">
                              Reports
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-item" href="#">
                              Analytics
                          </a>
                      </li>
                  </ul>
              </div>

              <div className="d-flex align-items-center">
                  <div className="w-100 me-3" />

                  <div className="flex-shrink-0 dropdown">
                      <a
                          href="#"
                          className="d-block link-white text-white text-decoration-none "
                          id="dropdownUser2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                      >
                          <img
                              src="https://github.com/mdo.png"
                              alt="mdo"
                              width="34"
                              height="34"
                              className="rounded-circle border-1 border border-white" />
                      </a>
                      <ul
                          className="dropdown-menu text-small shadow my-3"
                          aria-labelledby="dropdownUser2"
                      >
                          <li>
                              <a className="dropdown-item" href="#">
                                  New project...
                              </a>
                          </li>
                          <li>
                              <a className="dropdown-item" href="#">
                                  Settings
                              </a>
                          </li>
                          <li>
                              <a className="dropdown-item" href="#">
                                  Profile
                              </a>
                          </li>
                          <li>
                              <hr className="dropdown-divider" />
                          </li>
                          <li>
                              <a className="dropdown-item" href="#">
                                  Sign out
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
  );
}

export default Header;
