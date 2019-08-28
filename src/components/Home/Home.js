import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import { userListSelector} from '../../selectors';
import {getUserList} from '../../actions';
import UserList from './UserList/UserList';

class Home extends React.Component {
  constructor(props){
    super(props);
    console.log(process.env.API_URL);
    const {dispatch} = this.props;
    dispatch(getUserList());
  }
  render() {
    const {message,fetched,data} = this.props;
    console.log(data);
    return (
      <div className="wrapper">
        {fetched ? <UserList/> : 'laoding....'}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const user = userListSelector(state);
  return user ? {
    ...user.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Home);
