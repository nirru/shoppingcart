import React from 'react';
import './userDetail.css';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Switch from '../../Switch/Switch';
import {setActiveUser, setUpdatePlan, setUpdateUser} from '../../../actions';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
    this.state = {
      id:this.props.location.state.id,
      first_name: this.props.location.state.first_name,
      last_name: this.props.location.state.last_name,
      email: this.props.location.state.email,
      mobile_number: this.props.location.state.mobile_number,
      user_name: this.props.location.state.user_name,
      active:this.props.location.state.is_account_active === 1,
      is_account_active:this.props.location.state.is_account_active,
      profile_image:null,
      file: `${process.env.IMAGE_URL}/${this.props.location.state.profile_picture}`,

    };
  }

  handleToogleChange = (e) => {
    const isChecked = e.target.checked;
    this.setState({
      active:isChecked,
      is_account_active:isChecked ? 1 : 0
    });
  };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

  handleFileChange=e=>{
    this.setState({
      file:URL.createObjectURL(e.target.files[0]),
      profile_image:e.target.files[0]
    });
  };

  callback = e => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(setUpdateUser(this.state));
  };
  render() {
    console.log(this.state.profile_picture);
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">User Detail</h5>
              <form className="form-signin" onSubmit={this.callback}>
                <div className="text-center">
                  <img src={this.state.file === null ? 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png' : this.state.file}
                    className="avatar img-circle img-thumbnail" alt="avatar"/>
                  <h6>Upload a different photo...</h6>
                  <input type="file" onChange={this.handleFileChange} className="text-center center-block file-upload"/>
                </div>
                <br/>
                <div className="form-label-group">
                  <input type="name" id="inputName" className="form-control" placeholder="First Name"
                    required
                    onChange={this.handleChange('first_name')} value={this.state.first_name}/>
                  <label htmlFor="inputName">First Name</label>
                </div>
                <div className="form-label-group">
                  <input type="name" id="inputName" className="form-control" placeholder="Last Name"
                    required
                    onChange={this.handleChange('last_name')} value={this.state.last_name}/>
                  <label htmlFor="inputName">Last Name</label>

                </div>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control"
                    placeholder="Email address" required
                    onChange={this.handleChange('email')} value={this.state.email}/>
                  <label htmlFor="inputEmail">Email</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputMobile" className="form-control" placeholder="Mobile"
                    required onChange={this.handleChange('mobile_number')} value={this.state.mobile_number}/>
                  <label htmlFor="inputMobile">Mobile</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputMobile" className="form-control" placeholder="Mobile"
                    required onChange={this.handleChange('user_name')} value={this.state.user_name}/>
                  <label htmlFor="inputMobile">User Name</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputStripeBankId" className="form-control" placeholder="Stripe Bank Account Id"
                    required readOnly={true} value={this.props.location.state.stripe_bank_account_id}/>
                  <label htmlFor="inputMobile">Stripe Bank Account Id</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputStripeConnectedId" className="form-control" placeholder="Stripe Connected Account Id"
                    required readOnly={true} value={this.props.location.state.stripe_connected_account_id}/>
                  <label htmlFor="inputMobile">Stripe Connected Account Id</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputStripeConnectedId" className="form-control" placeholder="Stripe Customer Id"
                    required readOnly={true} value={this.props.location.state.stripe_customer_id}/>
                  <label htmlFor="inputMobile">Stripe Customer Id</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputStripeConnectedId" className="form-control" placeholder="Subscription Expiry Date"
                    required readOnly={true} value={this.props.location.state.subscription_expire_date}/>
                  <label htmlFor="inputMobile">Subscription Expiry Date</label>
                </div>

                <div className="form-label-group">
                  verify Account
                  <Switch
                    checked={this.state.is_account_active}
                    onChange={(e)=>this.handleToogleChange(e)}
                  />
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit">Update
                </button>
                <hr className="my-4"/>
                {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i*/}
                {/*  className="fab fa-google mr-2"></i> Sign in with Google*/}
                {/*</button>*/}
                {/*<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i*/}
                {/*  className="fab fa-facebook-f mr-2"></i> Sign in with Facebook*/}
                {/*</button>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Result = compose(withRouter,connect(undefined,undefined))(UserDetail);
export default Result;