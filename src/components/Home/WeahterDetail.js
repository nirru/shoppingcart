import React from 'react';
import './details.css';
import '../../styles/loader.css';
import {connect} from 'react-redux';
import {weatherDetailSelector} from '../../selectors';
import {compose} from 'redux';
import { getWeatherDetail} from '../../actions';
import Loader from '../common/Loader';
import {WeatherIcon} from '../../weatherIcons';
import {withRouter} from 'react-router-dom';

let city = 'Denver';
class WeahterDetail extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    city = this.props.match.params.city;
    const {dispatch} = this.props;
    dispatch(getWeatherDetail(city));
  }
  handleChange(e) {
    const a =   this.state.data.map(item=>{
      if (item.id == parseInt(e.target.value)) {
        return {...item,checked:e.target.checked};
      }
      else {
        return {...item,checked: false};
      }
    });

    this.setState({data:a});
  }

  getIconName = (data) => {
    const prefix = 'wi-';
    const code = data.weather[0].id;
    let icon = WeatherIcon[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'day-' + icon;
    }

    // Finally tack on the prefix.
    icon = prefix + icon;
    return icon;
  };

  milliToDate = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;


    return hours + ':' + minutes + ':' + seconds;
  }


  render() {
    const {weather,fetched} = this.props;
    console.log(weather);
    return (
      <div className="main-content-body">
        <Loader/>
        {fetched === true ? <div className="shadow-box">
          <div className="logo-box">
            <img src={require(`../../svg/${this.getIconName(weather.data)}.svg`)} alt=""/>
          </div>
          <div className="info-block">
            <table>
              <tbody>
                <tr>
                  <th>Weather</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Temprature(min/max)&#8451;</td>
                  <td>{weather.data.main.temp_min} / {weather.data.main.temp_max}</td>
                </tr>
                <tr>
                  <td>Pressure</td>
                  <td>{weather.data.main.pressure} hpa</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>{weather.data.main.humidity} %</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>{weather.data.wind.speed} m/s</td>
                </tr>
                <tr>
                  <td>Geo-Cord</td>
                  <td>[{weather.data.coord.lon},{weather.data.coord.lat}]</td>
                </tr>
                <tr>
                  <td>SunRise</td>
                  <td>{this.milliToDate(weather.data.sys.sunrise)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> : null}

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const weather = weatherDetailSelector(state);
  // console.log(user.toJS());
  return weather ? {
    weather:weather.toJS(),
    fetched:true
  } : {
    fetched:false
  };
};
export default compose(withRouter,connect(mapStateToProps,undefined))(WeahterDetail);
