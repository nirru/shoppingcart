import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

class Profile extends React.Component{

  render() {
    return (
      <div>
                Profile
      </div>
    );
  }

}

const enhance = compose(connect(undefined,undefined))(Profile);
export default enhance;