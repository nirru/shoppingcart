import React from 'react';
import {connect} from 'react-redux';
import { setAddPlan, addPlan} from '../../actions';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {itemPlanSelector} from '../../selectors/planListSelector';
import {getStore} from '../../getStore';
class UpdatePlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      plan_name: '',
      plan_duration: '',
      plan_amount: '',
    };

  }



  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  callback = e => {
    e.preventDefault();
    console.log(this.state);
    const {dispatch} = this.props;
    dispatch(setAddPlan(this.state));
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Update Plan</h5>
                <form className="form-signin" onSubmit={this.callback}>

                  <br/>
                  <div className="form-label-group">
                    <input type="name" id="inputName" className="form-control" placeholder="Plan Name"
                      required
                      autoFocus onChange={this.handleChange('plan_name')} value={this.state.plan_name}/>
                    <label htmlFor="inputName">Plan Name</label>
                  </div>
                  <div className="form-label-group">
                    <input type="duration" id="inputDuration" className="form-control"
                      placeholder="Plan Duration" required
                      autoFocus onChange={this.handleChange('plan_duration')} value={this.state.plan_duration}/>
                    <label htmlFor="inputDuration">Duration</label>
                  </div>

                  <div className="form-label-group">
                    <input type="amount" id="inputAmount" className="form-control" placeholder="Plan Amount"
                      required onChange={this.handleChange('plan_amount')} value={this.state.plan_amount}/>
                    <label htmlFor="inputAmount">Amount</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">Create Plan
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state,props) => {
  console.log(props.match.params.id);
  const plan = itemPlanSelector(props.match.params.id)(state);
  console.log(price);
  return plan ? {
    data:plan.toJS(),
    fetched:true
  } : {
    fetched:false
  };

}
const Result = compose(withRouter,connect(mapStateToProps,undefined))(UpdatePlan);
export default Result;
