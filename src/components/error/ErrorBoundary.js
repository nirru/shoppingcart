import React from 'react';
import Error from "../Error/Error";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, info) {
    this.setState({hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Error/>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
