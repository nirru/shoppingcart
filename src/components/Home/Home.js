import React from 'react';
import './home.css';
import {connect} from 'react-redux';
import {getUserList} from '../../actions';
import UserList from './UserList/UserList';
import {userListSelector} from '../../selectors/userListSelector';
import Statistics from '../statistics/Statistics';
import Survey from '../survey/Survey';
import Switch from '../Switch/Switch';
import {history} from '../../helper/history';

class Home extends React.Component {
  constructor(props){
    super(props);
    console.log(process.env.API_URL);
    // const {dispatch} = this.props;
    // dispatch(getUserList());
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
     return (
       <div className="wrapper">
         <div className="div-css">
           <div className="row">
             <div className="col-md-6 mb-4">
               <div className="card full-height d-flex justify-content-center align-items-center shadow-sm">


                 <div id="circles-1"><Statistics id = {2}/></div>

               </div>
             </div>
             <div className="col-md-6 mb-4">
               <div className="card full-height d-flex justify-content-center align-items-center shadow-sm">
                 <div id="circles-2"><Statistics id = {1}/></div>
               </div>
             </div>

             <div className="col-md-6 mb-4">
               <div className="card full-height d-flex justify-content-center align-items-center shadow-sm">
                 <div id="circles-2"><Statistics id = {3}/></div>
               </div>
             </div>
             <div className="col-md-6 mb-4">
               <div className="card full-height d-flex justify-content-center align-items-center shadow-sm">

                 <div id="circles-2"><Survey/></div>

               </div>
             </div>
           </div>

         </div>
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