import React from 'react';
import Loader from '../common/Loader';

const MyCheckbox = ({ checked = false, onChange }) => (

  <div className="weather-detail">
    <Loader/>
    {fetched === true ?
      <div className="weather-cloud">

        <div>
          <img className="cloud-icon" src={require(`../../svg/${this.getIconName(weather.data)}.svg`)} />
          <h2 className="decription">{weather.data.weather[0].description}</h2>
          {/*<p className="decription">Sunrise : {this.milliToDate(weather.data.sys.sunrise)}</p>*/}
          {/*<p className="decription">Sunset : {this.milliToDate(weather.data.sys.sunset)}</p>*/}
          <p className="decription">Temp min:{weather.data.main.temp_min}&#8451; / max:{weather.data.main.temp_max}&#8451;</p>
          <p className="decription">Pressure:{weather.data.main.pressure} hpa</p>
          <p className="decription">Humidity:{weather.data.main.humidity} %</p>
          <p className="decription">Wind: {weather.data.wind.speed} m/s</p>
          <p className="decription">GeoCord: [{weather.data.coord.lon},{weather.data.coord.lat}]</p>

        </div> :
      </div> : null}

  </div>

  // <input type="checkbox" checked={checked} onChange={onChange}/>

);



export default MyCheckbox;