import React from 'react';
import Child from './Child';
class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Parent Component'
    };

    this.myRefs = React.createRef();

  }

  child = (name) => {
    console.log(name);
    this.setState({
      name:name,
    });
    this.myRefs.current.focus();
  };
  render() {
    return (
      <div>
        {this.state.name}
        <Child action = {this.child}>

        </Child>

        <input ref={this.myRefs}/>
      </div>
    );
  }
}

export default Parent