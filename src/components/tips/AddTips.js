import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {setCreateTip} from '../../actions';

class AddTips extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tips_title: '',
      tips_description: '',
      tips_video: undefined,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFileChange=e=>{
    this.setState({tips_video:e.target.files[0]});
  };
  callback = e => {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.tips_video){
      const {dispatch} = this.props;
      dispatch(setCreateTip(this.state));
    } else {
      alert('please select video file in mp4 format');
    }

  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Create Tips</h5>
                <form className="form-signin" onSubmit={this.callback}>

                  <br/>
                  <div className="form-label-group">
                    <input type="name" id="inputName" className="form-control" placeholder="Tips Name"
                      required
                      onChange={this.handleChange('tips_title')} value={this.state.tips_title}/>
                    <label htmlFor="inputName">Tips Name</label>
                  </div>
                  <div className="form-label-group">
                    <input type="description" id="inputDuration" className="form-control"
                      placeholder="Tips Description" required
                      onChange={this.handleChange('tips_description')} value={this.state.tips_description}/>
                    <label htmlFor="inputDuration">Tips Description</label>
                  </div>
                  <div className="form-label-group">
                    <input type="file" onChange={this.handleFileChange} className="text-center center-block file-upload" accept="video/mp4"/>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">Create Tips
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
const Result = compose(withRouter,connect(undefined,undefined))(AddTips);
export default Result;
