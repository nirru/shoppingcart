import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import './pool.css';
class Pool extends React.Component{
  render() {
    return (
      <div>
               Pool
      </div>
    );
  }

}

const enhance =  compose(connect(undefined,undefined))(Pool);
export default enhance;