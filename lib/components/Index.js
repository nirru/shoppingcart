import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login/Login';
import loginHoc from '../HOC/LoginHoc';

class App extends React.Component{
    state = {
      answer:0
    }

    asyncFunc = () => {
      return Promise.resolve(33);
    }

    async componentDidMount() {
      this.setState({answer: await this.asyncFunc()});
    }
    render() {
      const LoginME = loginHoc(Login);
      return (
        <div>
          {/*<h2>Wow Tree Class Component -- {this.state.answer}</h2>*/}
          {/*<Login/>*/}
          <LoginME/>
        </div>
      );
    }

}

export default App;

ReactDom.render(<App/>,document.getElementById('root'));
module.hot.accept();
