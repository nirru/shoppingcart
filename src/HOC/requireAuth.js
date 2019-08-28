import React from 'react';
import {currentUserSelector} from '../selectors';
import {connect} from 'react-redux';
import {history} from '../helper/history';
export const requiresAuth = (Component) => {
  class AuthenticatedComponent extends React.Component {
    render() {
      const user=JSON.parse(localStorage.getItem('USER'));
      return (
        <div>
          {user ? <Component/> : history.push('/login')}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    const user = currentUserSelector(state);
    return user ? {
      ...user.toJS(),
      fetched:true
    } : {
      fetched:false
    };
  };

  return connect(mapStateToProps,undefined)(AuthenticatedComponent);
};
