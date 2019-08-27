import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import {currentUserSelector} from '../../selectors';

class Home extends React.Component {
  constructor(props){
    super(props);
    console.log(process.env.API_URL);
  }
  render() {
    const {message,fetched} = this.props;
    console.log(fetched)
    return (
      <div className="wrapper">
        Home
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

export default connect(mapStateToProps,undefined)(Home);
