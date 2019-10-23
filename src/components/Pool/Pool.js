import React from 'react';
import {history} from '../../helper/history';
import {connect} from 'react-redux';
import { poolListSelector} from '../../selectors';
import {getPoolList, getPoolSearch, getUserSearch} from '../../actions';
import './pool.css';
import Switch from '../Switch/Switch';
let isLoaded= false;
let initData = [];
class Pool extends React.Component{

  componentDidMount() {
    isLoaded = false;
    const {dispatch} = this.props;
    dispatch(getPoolList());
  }

  handleSearch=(q)=> {
    console.log(q.target.value);
    // console.log(data);
    const {dispatch} = this.props;
    dispatch(getPoolSearch(q.target.value,initData));
  };
  goToPoolDetail = (id) => {
    // const {dispatch} = this.props;
    // dispatch(setAddPlan(id));
    history.push(`/pool-detail/${id}`);
  };

  getReadabletime = (time) =>{
    const d = new Date(time);
    // console.log(d.getUTCHours()); // Hours
    // console.log(d.getDay());
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };


  render() {
    const {data,fetched} = this.props;
    // console.log(data);
    if (fetched && !isLoaded){
      isLoaded = true;
      initData = data;
    }

    return(
      <div className="div-css">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>Pool Management</h2>
              </div>
              <div className="col-sm-7 d-flex justify-content-end" >
                {/*<a href="#" className="btn btn-primary"><i className="material-icons">&#xE147;</i>*/}
                {/*  <span>Add New Pool</span>*/}
                {/*</a>*/}
                <input type="text"   onChange={(e)=>this.handleSearch(e)} placeholder={'search'} className="form-control w-25" />
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Pool Name</th>
                <th>Member</th>
                <th>Total Amount</th>
                <th>Reason</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(item=>{
                return <tr key={item.pool_id}>
                  <td>{item.pool_id}</td>
                  <td>{item.pool_name}</td>
                  <td>{item.no_of_deduction_or_members}</td>
                  <td>{item.total_amount}</td>
                  <td>{item.reason}</td>
                  <td>{this.getReadabletime(item.start_date)}</td>
                  <td>{this.getReadabletime(item.due_date)}</td>
                  <td>{this.getReadabletime(item.end_date)}</td>
                  <td>
                    <Switch
                      checked={item.pool_status === 1 ? true : false}
                      onChange={(e)=>this.handleChange(e,item)}
                    />
                  </td>
                  <td>
                    <a href="javascript:void(0)"
                      className="settings"
                      title="Settings"
                      data-toggle="tooltip"
                      onClick={()=> this.goToPoolDetail(item.pool_id)}>
                      <i className="material-icons">&#xE8B8;</i>
                    </a>
                    {/*<a href="#"*/}
                    {/*  className="delete"*/}
                    {/*  title="Delete"*/}
                    {/*  data-toggle="tooltip"*/}
                    {/*  onClick={()=> console.log('delete')}>*/}
                    {/*  <i className="material-icons">&#xE5C9;</i></a>*/}
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
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  const pool = poolListSelector(state);
  return pool ? {
    data:pool.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Pool);