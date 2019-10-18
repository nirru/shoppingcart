import React from 'react';
class Child extends React.Component{

  sendData = () => {
    this.props.action('Sending Data from Child Component');
  }
  render() {
    return(
      <div>
        Child Component
        <button onClick ={()=>this.sendData()}></button>
      </div>
    );
  }
}

export default Child;