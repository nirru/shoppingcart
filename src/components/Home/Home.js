import React from 'react';
import './home.css';
import '../../styles/loader.css';
import {WEATHER} from '../../dummy/weather';
import {history} from '../../helper/history';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data:WEATHER,
      fetching:undefined,
    };
  }

  getWeahterInfo = () => {
    const result = this.state.data.find(item => item.checked === true);
    history.push(`/${result.city}`);
  };

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




  render() {
    const {data} = this.state;
    return (
      <div className="main-content-body">
        <div className="shadow-box">
          <div className="block-text-group">

            {data.map(item=> {
              return <div key={item.id} className="form-wrapper">
                <div className="form-group checkbox">
                  <label htmlFor={item.id}>
                    <input type="checkbox" id="t1" checked={item.checked} value = {item.id}  onChange={this.handleChange}/>
                    <span className="checkboxtext"></span>
                    {item.city}
                  </label>
                </div>
              </div>;
            })}

          </div>

          <div className="button-submit">
            <button className="btn" onClick={()=>this.getWeahterInfo()}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}



export default Home
