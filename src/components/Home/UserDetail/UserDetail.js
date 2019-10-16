import React from 'react';
import './userDetail.css';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      file: null
    };
  }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

  handleFileChange=e=>{
    this.setState({file:URL.createObjectURL(e.target.files[0])});
  };


  render() {
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
                  <input type="name" id="inputName" className="form-control" placeholder="Name"
                    required
                    autoFocus onChange={this.handleChange('name')} value={this.state.name}/>
                  <label htmlFor="inputName">Name</label>
                </div>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control"
                    placeholder="Email address" required
                    autoFocus onChange={this.handleChange('email')} value={this.state.email}/>
                  <label htmlFor="inputEmail">Email</label>
                </div>

                <div className="form-label-group">
                  <input type="mobile" id="inputMobile" className="form-control" placeholder="Mobile"
                    required onChange={this.handleChange('password')}/>
                  <label htmlFor="inputMobile">Mobile</label>
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

export default UserDetail;