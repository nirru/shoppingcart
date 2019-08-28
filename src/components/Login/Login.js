import React from 'react';
import './login.css';
import {getCurrentUserInfo, setCurrentUser} from '../../actions';
import {connect} from 'react-redux';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      email:'',
      password:'',
    };
  }

  componentDidMount() {
    localStorage.removeItem('USER');
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  callback = e => {
    e.preventDefault();
    console.log('CLICK')
    const {dispatch} = this.props;
    dispatch(getCurrentUserInfo(this.state));
    // dispatch(setCurrentUser(this.state));
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={this.callback}>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                    autoFocus onChange={this.handleChange('email')} value={this.state.email}/>
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange('password')}/>
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
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


export default connect(undefined,undefined)(Login);