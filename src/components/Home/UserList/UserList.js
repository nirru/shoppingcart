import React from 'react';
import './userlist.css';
import Switch from '../../Switch/Switch';
import {userListSelector} from '../../../selectors';
import {connect} from 'react-redux';
import {userSelector} from '../../../selectors/enableUserSelector';
class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checkedItems: new Map(),
    };
  }

  handleChange = (e,item) => {
    const isChecked = e.target.checked;
    this.setState(prevState => {
      return ({ checkedItems: prevState.checkedItems.set(item, isChecked) });
    });
  };
  render() {
    console.log(this.props.user);
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
              {this.props.data.map(item=>{
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <a href="#">
                      <img width={50} height={50} src={`${process.env.IMAGE_URL}/${item.profile_picture}`}/>
                    </a>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.date_of_birth}</td>
                  <td>{item.first_name + ' ' + item.last_name}</td>
                  <td>{'lat=' + item.latitude + ', lng=' + item.longitude}</td>
                  <td>
                    <Switch
                      checked={this.state.checkedItems.get(item)}
                      onChange={(e)=>this.handleChange(e,item)}
                    />
                  </td>
                  <td>
                    <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i
                      className="material-icons">&#xE8B8;</i></a>
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


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const user = userSelector(state);
  console.log(user)
  return user ? {
    // ...user.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(UserList);

// export default UserList;