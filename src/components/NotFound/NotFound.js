import React from 'react';
import './notfound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className='div-body'>
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <a href="javascript:void(0)" className="btn btn-primary btn-lg" onClick={()=>history.back()}>
                  <span className="glyphicon glyphicon-home"></span>
                                    Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;