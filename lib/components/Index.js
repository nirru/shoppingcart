import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login/Login';
import requireAuth from '../HOC/requireAuth';
import Home from './Home/Home';
import {HocDashboard} from '../router/routes';
import AppRoute from '../router/AppRoute';

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
      const LoginME = requireAuth(Login);
      return (
        <div>
          {/*<h2>Wow Tree Class Component -- {this.state.answer}</h2>*/}

          {/*<LoginME/>*/}
          <Home/>
          {/*<AppRoute/>*/}
        </div>
      );
    }

}

export default App;

ReactDom.render(<App/>,document.getElementById('root'));
module.hot.accept();
