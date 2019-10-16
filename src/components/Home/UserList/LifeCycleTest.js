import React,{Component} from 'react';

class LifeCycleTest extends Component{
/*
Lifecycle Method comes with four phase
1) Mounting
2) Updating
3) UnMounting
4) Error
 */

  /*
This method is called first in order before the component is inserted to Dom
and this is not a good place to do any sideeffect calls like setstate
 */
  constructor(props){
    super(props);
    this.state = {
      points:'',
    };
  }

  /*
  This method is called just before the component is mounted to the DOM (only initial rendering) and right after the
  Constructor call
  Essentially, this method allows a component to update its internal state in response to a change in props.
   */
  static getDerivedStateFromProps(props,state){
    // do stuff here
    return {
      points: '200'
    };
  }
  render() {
    return (
      <div>
                Test LifeCycle New Method
                With Practical Approach
        <p>
              you have scored {this.state.points};
        </p>
      </div>
    );
  }

  /*
  After render method is called Component is mounted to the Dom and
  ComponentDidMount method is called
   */
  componentDidMount() {
    const arry = [1,2,3,4];
    const sum = arry.reduce((previousValue, currentValue, currentIndex, array) => {
      return  previousValue + currentValue;
    });
    // console.log(sum);

    const arr1 = [[3, 2], [1], [4, 12]];
    const sum1 = arr1.reduce((previousValue, currentValue, currentIndex, array) => previousValue.concat(currentValue)).reduce((prev,current)=> prev + current)
    // console.log(sum1);
  }

  /*
  Whenever any changes in states or props occur component update lifecycle phase method is called
  in the first step static getDerivedStateFromProps (props,state) is called
  So this method is called both in mounting and updating phase.
  As soon as getDerivedStateFromProps is called next method in update phase is
  shouldComponentUpdate
         After shouldComponetUpdate render is called immediately
   */

  shouldComponentUpdate(nextProps, nextState, nextContext) {
  }

  /*
  Right after render getSnapshotBeforeUpdate method is called
   */

}
export default LifeCycleTest;