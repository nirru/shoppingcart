import React from 'react';
import './userlist.css';
import Switch from '../../Switch/Switch';
import {connect} from 'react-redux';
import {getUserList, getUserSearch, setActiveUser, setDeleteUser} from '../../../actions';
import {userListSelector} from '../../../selectors/userListSelector';
import {history} from '../../../helper/history';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
let isLoaded= false;
let initData = [];

class UserList extends React.Component{
  constructor(props){
    super(props);
    isLoaded= false;
    this.state = {
      checkedItems: new Map(),
    };
    const {dispatch} = this.props;
    dispatch(getUserList());
  }

  getReadabletime = (time) =>{
    const d = new Date(time);
    // console.log(d.getUTCHours()); // Hours
    // console.log(d.getDay());
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };
  handleSearch=(q)=> {
    // console.log(q.target.value);
    const {dispatch} = this.props;
    dispatch(getUserSearch(q.target.value,initData));
  };

  handleChange = (e,item) => {
    const isChecked = e.target.checked;
    const {dispatch} = this.props;
    dispatch(setActiveUser(item.id,isChecked));
  };

  deleteUserById = (id) => {
    const {dispatch} = this.props;
    dispatch(setDeleteUser(id));
  };
  render() {
    const {fetched,data} = this.props;
    // console.log(data);
    if (fetched && !isLoaded){
      isLoaded = true;
      initData = data;
    }
    return (
      <div className="div-css">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>User Management</h2>
              </div>
              <div className="col-sm-7 d-flex justify-content-end">
                {/*<a href="#" className="btn btn-primary"><i className="material-icons">&#xE147;</i>*/}
                {/*  <span>Add New User</span></a>*/}
                {/*<a href="#" className="btn btn-primary"><i className="material-icons">&#xE24D;</i>*/}
                {/*  <span>Export to Excel</span></a>*/}
                <input type="text" onChange={this.handleSearch} placeholder={'search'} className="form-control w-25" />
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
                      onClick={()=>history.push(`/user/${item.id}`,item)}>
                      <i className="material-icons">&#xE8B8;</i>
                    </a>
                    <a href="javascript:void(0)" onClick={()=>this.deleteUserById(item.id)} className="delete" title="Delete" data-toggle="tooltip"><i
                      className="material-icons">&#xE5C9;</i></a>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
          {/*<div className="clearfix">*/}
          {/*  <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>*/}
          {/*  <ul className="pagination">*/}
          {/*    <li className="page-item disabled"><a href="#">Previous</a></li>*/}
          {/*    <li className="page-item"><a href="#" className="page-link">1</a></li>*/}
          {/*    <li className="page-item"><a href="#" className="page-link">2</a></li>*/}
          {/*    <li className="page-item active"><a href="#" className="page-link">3</a></li>*/}
          {/*    <li className="page-item"><a href="#" className="page-link">4</a></li>*/}
          {/*    <li className="page-item"><a href="#" className="page-link">5</a></li>*/}
          {/*    <li className="page-item"><a href="#" className="page-link">Next</a></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
        {/*<LifeCycleTest/>*/}

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
const Result = compose(withRouter,connect(mapStateToProps,undefined))(UserList);
export default Result;

// export default UserList;