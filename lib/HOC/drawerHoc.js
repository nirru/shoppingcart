import React from 'react';
import './drawerHoc.css';

const drawerHoc = (Component) => {
  return class Drawer extends React.Component{
    render() {
      return (
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Admin</h3>
            </div>

            <ul className="list-unstyled components">
              <p>Money Pool</p>
              <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                    User Management
                </a>
              </li>
              <li>
                <a href="#">
                    Pool Management
                </a>
              </li>
              <li>
                <a href="#">
                    Profile
                </a>
              </li>
              <li>
                <a href="#">
                    Logout
                </a>
              </li>
            </ul>

          </nav>

          <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="navbar-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <Component/>
          </div>
        </div>
      );
    }
  };
};
export default drawerHoc;