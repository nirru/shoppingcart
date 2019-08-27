import React from 'react';
import {currentUserSelector} from '../selectors';
import {connect} from 'react-redux';
import {history} from '../helper/history';
export const requiresAuth = (Component) => {
  class AuthenticatedComponent extends React.Component {
    render() {
      const {status,message,fetched}=this.props;
      console.log(fetched);
      console.log(message);
      console.log(status);
      return (
        <div>
          {status ? <Component/> : history.push('/login')}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    const user = currentUserSelector(state);
    console.log(user);
    return user ? {
      ...user.toJS(),
      fetched:true
    } : {
      fetched:false
    };
  };

  return connect(mapStateToProps,undefined)(AuthenticatedComponent);
};
