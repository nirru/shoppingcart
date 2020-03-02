import {apiStatusSelector, weatherDetailSelector} from '../../selectors';
import {compose} from 'redux';
import {connect} from 'react-redux';
import React from 'react';
import '../Home/details.css';
import {API_FETCHING} from '../../actions/common';

class Loader extends React.Component{

  render() {
    const {status} = this.props;
    return (
      <div>
        {status === API_FETCHING ? <div className="preloader">
          <div className="preloader-body">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <polygon className="rect" points="0 0 0 40 40 40 40 0"></polygon>
            </svg>
          </div>
        </div> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const api = apiStatusSelector(state);
  return api ? {
    status:api,
    fetched:true
  } : {
    fetched:false
  };
};
export default compose(connect(mapStateToProps,undefined))(Loader);