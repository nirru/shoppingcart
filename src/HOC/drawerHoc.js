import React from 'react';
import './drawerHoc.css';
import {connect} from 'react-redux';
import {history} from '../helper/history';
import {privateNav} from '../router/privateNav';
import {publicNav} from '../router/publicNav';

export const drawerHoc = (Component) => {
  class Drawer extends React.Component{
    componentDidMount() {
      window.$(document).ready(function () {
        window.$('#sidebarCollapse').on('click', function () {
          window.$('#sidebar').toggleClass('active');
        });
      });
    }

    render() {
      return (
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Admin</h3>
            </div>

            <ul className="list-unstyled components">
              <p>Money Pool</p>
              {privateNav.map(item => {
                return <li key={item}>
                  <a href="javascript:void(0)" onClick={()=> history.push(item.url)}>
                    {item.name}
                  </a>
                </li>;
              })}

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
                    {publicNav.map(item => {
                      return <li key={item} className="nav-item">
                        <a className="nav-link" href="javascript:void(0)" onClick={()=>history.push(item.url)}>{item.name}</a>
                      </li>;
                    })}

                  </ul>
                </div>
              </div>
            </nav>

            <Component/>
          </div>
        </div>
      );
    }
  }
  return connect(undefined,undefined)(Drawer);
};