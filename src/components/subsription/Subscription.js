import React from 'react';
import {history} from '../../helper/history';
import {connect} from 'react-redux';
import {planListSelector} from '../../selectors';
import {getPlanList,  setDeletePlan, setAddPlan} from '../../actions';
import './subscription.css';
import Switch from '../Switch/Switch';
class Subscription extends React.Component{
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPlanList());
  }
  handleChange = (e,item) => {
    const isChecked = e.target.checked;
    // this.setState(prevState => {
    //   return ({ checkedItems: prevState.checkedItems.set(item, isChecked) });
    // });
    // const {dispatch} = this.props;
    // dispatch(setActiveUser(item.id,isChecked));
    // const store = getStore();
    // userSelector(1)(0)(store.getState());
  };

  updatePlan = (id,plan) => {
    // const {dispatch} = this.props;
    // dispatch(setAddPlan(id));
    history.push(`/update-plan/${id}`,plan);
  }

  deletPlan = (id) => {
    const {dispatch} = this.props;
    dispatch(setDeletePlan(id));
  };

  render() {
    const {data} = this.props;
    return(
      <div className="div-css">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>Plan Management</h2>
              </div>
              <div className="col-sm-7" onClick={()=>history.push('/add-plan')}>
                <a href="#" className="btn btn-primary"><i className="material-icons">&#xE147;</i>
                  <span>Add New Plan</span></a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Plan Name</th>
                <th>Duration</th>
                <th>Amount</th>
                {/*<th>Status</th>*/}
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {data && data.map(item=>{
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.plan_name}</td>
                  <td>{item.plan_duration}</td>
                  <td>{item.plan_amount}</td>

                  {/*<td>*/}
                  {/*  <Switch*/}
                  {/*    checked={item.is_active === 1 ? true : false}*/}
                  {/*    onChange={(e)=>this.handleChange(e,item)}*/}
                  {/*  />*/}
                  {/*</td>*/}
                  <td>
                    <a href="javascript:void(0)"
                      className="settings"
                      title="Settings"
                      data-toggle="tooltip"
                      onClick={()=> this.updatePlan(item.id,item)}>
                      <i className="material-icons">&#xE8B8;</i>
                    </a>
                    <a href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      onClick={()=> this.deletPlan(item.id)}>
                      <i className="material-icons">&#xE5C9;</i></a>
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
  const plan = planListSelector(state);
  return plan ? {
    data:plan.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Subscription);