import React from 'react';
import './error.css';

class Error extends React.Component {
  render() {
    return (
      <div className='div-body'>
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Something went wrong</h2>
              <div className="error-details">
                                Sorry, an error has occured.
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

export default Error;