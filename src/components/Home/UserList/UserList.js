import React from 'react';
import './userlist.css';
import Switch from '../../Switch/Switch';
import {connect} from 'react-redux';
import { setActiveUser} from '../../../actions';
import {userListSelector} from '../../../selectors/userListSelector';
import {history} from '../../../helper/history';
// import './test';
// import './ProtoTest';
// import MovieCollection from './MovieCollection';
// import MyLinkedList from './MyLinkedList';
// import StepTwo from './HookExample';
import LifeCycleTest from './LifeCycleTest';
import {factorialOfNumber, firstNonRepeating, reverseString} from "../../../exam/exam";
import Parent from './Parent';

class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checkedItems: new Map(),
    };

    // console.log(firstNonRepeating('foobar'));
    // console.log(factorialOfNumber(3));
    // console.log(reverseString('Hello'));
    // const movies = new MovieCollection('Fav Movies',
    //   { name: 'Movie', stars: 10 },
    //   { name: 'Star Trek', stars: 1 },
    //   { name: 'Virgin', stars: 7 },
    //   { name: 'King of the Road', stars: 8 }
    // );

    // for (const movie of movies){
    //   // console.log(movie);
    // }

    // console.log(movies.length);
    // movies.addMovie({ name: 'Chichore', stars: 10 });
    // console.log(movies.length);

    // const myList = new MyLinkedList();
    // for(var i=1;i<=10;i++) {
    //   myList.add(i);
    // }
    // myList.add(10);
    // myList.add(8);
    // myList.add(15);
    // myList.add(7);
    // myList.add(20);
    // myList.add(6);
    // console.log(myList.printList());
    // console.log(myList.getLength());
    // console.log(myList.remove(0));
    // console.log(myList.printList());
    // console.log(myList.getLength());
    // console.log(myList.search(3));
    // console.log(myList.insertAfter(19,6));

    // console.log(myList.sort());
    // console.log(myList.printList());
  }



  handleChange = (e,item) => {
    const isChecked = e.target.checked;
    // this.setState(prevState => {
    //   return ({ checkedItems: prevState.checkedItems.set(item, isChecked) });
    // });
    const {dispatch} = this.props;
    dispatch(setActiveUser(item.id,isChecked));
    // const store = getStore();
    // userSelector(1)(0)(store.getState());
  };
  render() {
    const {message,fetched,data} = this.props;
    // console.log(data);
    return (
      <div className="div-css">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>User Management</h2>
              </div>
              <div className="col-sm-7">
                <a href="#" className="btn btn-primary"><i className="material-icons">&#xE147;</i>
                  <span>Add New User</span></a>
                <a href="#" className="btn btn-primary"><i className="material-icons">&#xE24D;</i>
                  <span>Export to Excel</span></a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Profile Pic</th>
                <th>Date Created</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(item=>{
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <a href="#">
                      <img width={50} height={50} src={`${process.env.IMAGE_URL}/${item.profile_picture}`}/>
                    </a>
                  </td>
                  <td>{item.date_of_birth}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.first_name + ' ' + item.last_name}</td>
                  <td>{'lat=' + item.latitude + ', lng=' + item.longitude}</td>
                  <td>
                    <Switch
                      checked={item.is_account_active === 1 ? true : false}
                      onChange={(e)=>this.handleChange(e,item)}
                    />
                  </td>
                  <td>
                    <a href="javascript:void(0)"
                      className="settings"
                      title="Settings"
                      data-toggle="tooltip"
                      onClick={()=>history.push(`/user/${item.id}`)}>
                      <i className="material-icons">&#xE8B8;</i>
                    </a>
                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i
                      className="material-icons">&#xE5C9;</i></a>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <ul className="pagination">
              <li className="page-item disabled"><a href="#">Previous</a></li>
              <li className="page-item"><a href="#" className="page-link">1</a></li>
              <li className="page-item"><a href="#" className="page-link">2</a></li>
              <li className="page-item active"><a href="#" className="page-link">3</a></li>
              <li className="page-item"><a href="#" className="page-link">4</a></li>
              <li className="page-item"><a href="#" className="page-link">5</a></li>
              <li className="page-item"><a href="#" className="page-link">Next</a></li>
            </ul>
          </div>
        </div>
        <LifeCycleTest/>

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const user = userListSelector(state);
  // console.log(user.toJS());
  return user ? {
    ...user.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(UserList);

// export default UserList;