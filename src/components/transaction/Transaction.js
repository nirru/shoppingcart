import React from 'react';
import {history} from '../../helper/history';
import {connect} from 'react-redux';
import { transactionListSelector} from '../../selectors';
import {getTransactionList, getTransactionSearch, getUserSearch} from '../../actions';
import './transaction.css';
import Switch from '../Switch/Switch';

let isLoaded= false;
let initData = [];
class Transaction extends React.Component{

  componentDidMount() {
    isLoaded= false;
    const {dispatch} = this.props;
    dispatch(getTransactionList());
  }


  updatePlan = (id,plan) => {
    // const {dispatch} = this.props;
    // dispatch(setAddPlan(id));
    history.push(`/update-plan/${id}`,plan);
  };

  getReadabletime = (time) => {
    const d = new Date(time);
    // console.log(d.getUTCHours()); // Hours
    // console.log(d.getDay());
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };

  handleSearch=(q)=> {
    // console.log(q.target.value);
    const {dispatch} = this.props;
    dispatch(getTransactionSearch(q.target.value,initData));
  };

  render() {
    const {fetched,data} = this.props;
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
                <h2>Transaction Management</h2>
              </div>
              <div className="col-sm-7 d-flex justify-content-end">
                <input type="text" onChange={this.handleSearch} placeholder={'search'} className="form-control w-25" />
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Trans Name</th>
                <th>Amount(USD)</th>
                <th>Date</th>
                <th>Message</th>
                <th>Pool Id</th>
                <th>Plan Id</th>
                <th>User Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(item=>{
                return <tr key={item.history_id}>
                  <td>{item.history_id}</td>
                  <td>{item.name}</td>
                  <td>{item.transaction_amount}</td>
                  <td>{this.getReadabletime(item.transaction_date)}</td>
                  <td>{item.transaction_message}</td>
                  <td>{item.pool_id}</td>
                  <td>{item.plan_id}</td>
                  <td>{item.user_id}</td>
                  <td>
                    <b> {item.transaction_status === 1 ? 'Successed' : 'Failed'}</b>
                    {/*<Switch readOnly = {true} checked={item.transaction_status === 1}*/}
                    {/*  // onChange={(e)=>this.handleChange(e,item)}*/}
                    {/*/>*/}
                  </td>
                  {/*<td>*/}
                  {/*  <a href="javascript:void(0)"*/}
                  {/*    className="settings"*/}
                  {/*    title="Settings"*/}
                  {/*    data-toggle="tooltip"*/}
                  {/*    onClick={()=> this.updatePlan(item.id,item)}>*/}
                  {/*    <i className="material-icons">&#xE8B8;</i>*/}
                  {/*  </a>*/}
                  {/*  <a href="#"*/}
                  {/*    className="delete"*/}
                  {/*    title="Delete"*/}
                  {/*    data-toggle="tooltip"*/}
                  {/*    onClick={()=> console.log('delete')}>*/}
                  {/*    <i className="material-icons">&#xE5C9;</i></a>*/}
                  {/*</td>*/}
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
  const transaction = transactionListSelector(state);
  return transaction ? {
    data:transaction.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Transaction);