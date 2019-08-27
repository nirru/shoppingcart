import React from 'react';


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
      return <h1>Oops!!! Something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
