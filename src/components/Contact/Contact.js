import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

class Contact extends React.Component{
  render() {
    return (
      <div>
                Contact
      </div>
    );
  }
}

const enhance = compose(connect(undefined,undefined))(Contact);
export default enhance;