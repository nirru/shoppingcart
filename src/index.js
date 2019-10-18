import React from 'react';
import ReactDom from 'react-dom';
import AppRoute from './router/AppRoute';
import {getStore} from './getStore';
const store = getStore();
import { Provider } from 'react-redux';
import {add, higAdd} from '../challenge';
class App extends React.Component {
    state = {
      answer:0
    }

    constructor(props){
      super(props);
      const res = add(5)(6);
      console.log(res);
      console.log(higAdd(5)(6));
    }

    asyncFunc = () => {
      return Promise.resolve(33);
    }

    async componentDidMount() {
      this.setState({answer: await this.asyncFunc()});
    }
    render() {
      // const LoginME = requireAuth(Login);
      return (
        <div>
          {/*<h2>Wow Tree Class Component -- {this.state.answer}</h2>*/}
          <Provider store={store}>
            <AppRoute/>
            {/*<LoginME/>*/}
            {/*<Home/>*/}
          </Provider>
        </div>
      );
    }

}

export default App;

ReactDom.render(<App/>,document.getElementById('root'));
module.hot.accept();
