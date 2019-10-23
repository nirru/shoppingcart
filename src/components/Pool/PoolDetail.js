import React from 'react';
import {poolDetailSelector} from '../../selectors';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {getPoolDetail,} from '../../actions';
import './poolDetail.css';
import Switch from '../Switch/Switch';
class PoolDetail extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    const {dispatch} = this.props;
    dispatch(getPoolDetail(this.props.match.params.id));
  }
  getReadabletime = (time) =>{
    const d = new Date(time);
    // console.log(d.getUTCHours()); // Hours
    // console.log(d.getDay());
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };
  render() {
    const {data,fetched} = this.props;
    console.log(fetched && data.pool_data);
    return (
      <div>
        <div >
          {fetched &&
          <div className="row">
          <div className="col-lg-4">
            <div className="card card-signin h-100">
              <div className="card-body">
                <h5 className="text-center">Pool Detail</h5>
                <div className="form-signin">

                  <br/>
                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Pool Name" value={data.pool_data.pool_name}/>
                    <label htmlFor="inputName">Pool Name</label>
                  </div>
                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Start Date" value={this.getReadabletime(data.pool_data.start_date)}/>
                    <label htmlFor="inputName">Start Date</label>
                  </div>

                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Due Date" value={this.getReadabletime(data.pool_data.due_date)}/>
                    <label htmlFor="inputName">Due Date</label>
                  </div>

                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="End Date" value={this.getReadabletime(data.pool_data.end_date)}/>
                    <label htmlFor="inputName">End Date</label>
                  </div>

                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Pool Reason" value={data.pool_data.reason}/>
                    <label htmlFor="inputName">Pool Reason</label>
                  </div>

                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Deduction Amount" value={data.pool_data.amount_per_deduction}/>
                    <label htmlFor="inputName">Deduction Amount(USD)</label>
                  </div>

                  <div className="form-label-group">
                    <input type="name" id="inputName" readOnly={true} className="form-control" placeholder="Total Amount" value={data.pool_data.total_amount}/>
                    <label htmlFor="inputName">Total Amount(USD)</label>
                  </div>

                </div>

              </div>
            </div>
          </div>
            <div className="col-lg-8">
              <div className="table-responsive card card-signin poll-table">
              <table className="table table-striped table-hover">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Rating</th>
                  <th>Total Pool</th>
                  <th>Owner</th>
                  <th>Paid</th>
                  <th>Payout</th>
                  <th>pic</th>
                </tr>
                </thead>
                <tbody>
                {data.pool_data.memmber_data && data.pool_data.memmber_data.map(item=>{
                  return <tr key={item.user_id}>
                    <td>{item.user_id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.rating}</td>
                    <td>{item.total}</td>

                    <td>{item.is_owner === 1 ? 'Yes' : 'No'}</td>
                    <td>{item.is_paid === 1 ? 'Yes' : 'No'}</td>
                    <td>{item.is_payout === 1 ? 'Yes' : 'No'}</td>
                    <td>
                      <a href="#">
                        <img width={50} height={50} src={`${process.env.IMAGE_URL}/${item.profile_picture}`}/>
                      </a>
                    </td>
                  </tr>;
                })}
                </tbody>
              </table>
              </div>
            </div>
          </div>
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const poolDetail = poolDetailSelector(state);
  return poolDetail ? {
    data:poolDetail.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

const Result = compose(withRouter,connect(mapStateToProps,undefined))(PoolDetail);
export default Result;