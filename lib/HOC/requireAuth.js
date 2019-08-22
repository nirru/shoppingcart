import React from 'react';
import {currentUserSelector} from '../selectors';
import {compose} from 'redux';
import {connect} from 'react-redux';
const requireAuth = Comp => {
  // eslint-disable-next-line react/display-name

  return class Auth extends React.Component{
    render() {
      return (
        <div>
          <Comp/>
        </div>
      );
    }

  };
};



export default requireAuth;
