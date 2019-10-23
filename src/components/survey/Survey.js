import React from 'react';
import {connect} from 'react-redux';
import { surveyListSelector} from '../../selectors';
import { getSurveyList} from '../../actions';
import {MySurvey} from './SvgSurvey';
class Survey extends React.Component{

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getSurveyList());
  }

  getReadabletime = (time) =>{
    const d = new Date(time);
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };

  render() {
    const {fetched,data} = this.props;
    return(
      <div>
        {fetched && <MySurvey data={data}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const surveyList = surveyListSelector(state);
  return surveyList ? {
    data:surveyList.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Survey);
