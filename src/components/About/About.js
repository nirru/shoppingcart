import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

class About extends React.Component{

  render() {
    return (
      <div>
                About
      </div>
    );
  }

}

const enhance = compose(connect(undefined,undefined))(About);
export default enhance;