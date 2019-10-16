import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

class About extends React.Component{

  componentDidMount() {
    this.setState({
      user:this.props.user,
      item: this.props.item
    });
  }

  render() {

    return (
      <div>
        <h2>
                About us
        </h2>
      </div>
    );
  }

}

const enhance = compose(connect(undefined,undefined))(About);
export default enhance;