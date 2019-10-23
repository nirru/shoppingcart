import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { tipListSelector} from '../../selectors';
import {getPoolSearch, getTipList, getTipSearch, setDeletePlan, setDeleteTip} from '../../actions';
import './tips.css';
import {history} from '../../helper/history';
let isLoaded= false;
let initData = [];
class TipsList extends React.Component{

  componentDidMount() {
    isLoaded = false;
    const {dispatch} = this.props;
    dispatch(getTipList());
  }

  getReadabletime = (time) =>{
    const d = new Date(time);
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };

  updateTip = (tip)=> {
    console.log(tip);
    history.push(`/update-tips/${tip.tips_id}`,tip);
  }

  deletTip = (id) => {
    const {dispatch} = this.props;
    dispatch(setDeleteTip(id));
  };

  handleSearch=(q)=> {
    // console.log(q.target.value);
    // console.log(data);
    const {dispatch} = this.props;
    dispatch(getTipSearch(q.target.value,initData));
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
                <h2>Tips List</h2>
              </div>
              <div className="col-sm-7 d-flex justify-content-end" >
                <input type="text"   onChange={(e)=>this.handleSearch(e)} placeholder={'search'} className="form-control w-25" />
                <a href="javascript:void(0);" onClick={()=> history.push('/add-tips')} className="btn btn-primary"><i className="material-icons">&#xE147;</i>
                  <span>Add New Tip</span></a>

              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Tips Title</th>
                <th>Tips Description</th>
                <th>Created At</th>
                <th>Video</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(item=>{
                return <tr key={item.tips_id}>
                  <td>{item.tips_id}</td>
                  <td>{item.tips_title}</td>
                  <td >{item.tips_description}</td>
                  <td>{this.getReadabletime(item.created_at)}</td>
                  <td>

                    <video width={100} height={100} controls>
                      <source src={`${process.env.VIDEO_URL}/${item.tips_video}`} type="video/mp4"/>
                    </video>

                  </td>
                  <td>
                    <a href="javascript:void(0)"
                      className="settings"
                      title="Settings"
                      data-toggle="tooltip"
                      onClick={()=> this.updateTip(item)}>
                      <i className="material-icons">&#xE8B8;</i>
                    </a>
                    <a href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      onClick={()=> this.deletTip(item.tips_id)}>
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
  const tips = tipListSelector(state);
  return tips ? {
    data:tips.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};
const Result = compose(withRouter,connect(mapStateToProps,undefined))(TipsList);
export default Result;