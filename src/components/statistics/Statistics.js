import React from 'react';
import {connect} from 'react-redux';
import {statisticsListSelector} from '../../selectors';
import {getStatisticsList} from '../../actions';
import {MyCompo} from './SvgStatistics';
import {UserCompo} from './UserStatistics';
import {TransactionCompo} from './TransactionStatistics';


class Statistics extends React.Component{

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getStatisticsList());
  }

  getReadabletime = (time) =>{
    const d = new Date(time);
    return d.getUTCDay() + '/' + (d.getUTCMonth() +1)+ '/' + d.getUTCFullYear();
    // + ' ' + d.getUTCHours() + ' hrs' + ' ' + d.getUTCMinutes() + ' min ' + d.getUTCSeconds() + ' sec';
  };

  renderMe =(id,data)=>{
    if (id === 1){
      return <MyCompo data={data}/>;
    } else if(id === 2){
      return <UserCompo data={data}/>;
    }else if(id === 3){
      return <TransactionCompo data={data}/>;
    }
  }

  render() {
    const {fetched,data} = this.props;
    // console.log(data);
    return(
      <div >
        { fetched && this.renderMe(this.props.id,data)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const statistics = statisticsListSelector(state);
  return statistics ? {
    data:statistics.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};

export default connect(mapStateToProps,undefined)(Statistics);
