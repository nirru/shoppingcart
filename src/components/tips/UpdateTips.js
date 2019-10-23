import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {setCreateTip, setUpdateTip} from '../../actions';

class UpdateTips extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tips_id:this.props.location.state.tips_id,
      tips_title: this.props.location.state.tips_title,
      tips_description: this.props.location.state.tips_description,
      tips_video: null,
      file:`${process.env.VIDEO_URL}/${this.props.location.state.tips_video}`
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFileChange=e=>{
    console.log(e.target.files[0]);
    this.setState({
      tips_video:e.target.files[0],
      file:URL.createObjectURL(e.target.files[0]),
    });
  };
  callback = e => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(setUpdateTip(this.state));

  };
  render() {
    console.log(this.state.file);
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Update Tips</h5>
                <form className="form-signin" onSubmit={this.callback}>
                  <div className="form-label-group text-center">
                    <video width={300} height={300} controls >
                      <source src={this.state.file} type="video/mp4"/>
                    </video>
                    <input type="file" onChange={this.handleFileChange} className="text-center center-block file-upload" accept="video/mp4"/>
                    <h6>Upload a different Video...</h6>
                  </div>
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
                  <button className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">Update Tips
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
const Result = compose(withRouter,connect(undefined,undefined))(UpdateTips);
export default Result;
