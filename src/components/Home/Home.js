import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import {getUserList} from '../../actions';
import UserList from './UserList/UserList';
import {userListSelector} from '../../selectors/userListSelector';

class Home extends React.Component {
  constructor(props){
    super(props);
    console.log(process.env.API_URL);
    const {dispatch} = this.props;
    dispatch(getUserList());
    // console.log(this.findFactorial(4));
    // console.log(this.firstReverse('Nirmal Kumar'));
    // console.log(this.letterChange('fun times!'));
  }

  findFactorial = (number) => {
    if (number === 0 || number === 1)
      return 1;
    else {
      number = number * this.findFactorial(number - 1);
      return number;
    }
  };

  firstReverse = (str) => {
    for (var i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
    }
    return str.split('').reverse().join('');
  };

  letterChange = (str) => {
    let converted = str.replace(new RegExp(/[a-z]/gi),char=>{
      return char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });

    let captilized = converted.replace(new RegExp(/a|e|i|o|u/gi),vowel => {
      return vowel.toUpperCase();
    });

    return captilized;
  }

   simpleArraySum =(ar)=> {
     /*
     * Write your code here.
     */
     const arrSum = ar.reduce((a,b) => a + b, 0);
     return arrSum;

   }



   render() {
     const {message,fetched,data} = this.props;
     // console.log(data);
     return (
       <div className="wrapper">
         {fetched ? <UserList/> : 'loading....'}
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