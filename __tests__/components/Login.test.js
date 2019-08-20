import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';
// Component to be tested
import Login from '../../lib/components/Login/Login';

describe('Login Component', () => {

  // make our assertion and what we expect to happen
  // eslint-disable-next-line no-undef
  it('should render without throwing an error', () => {
    // eslint-disable-next-line no-undef
    expect(shallow(<Login />).find('form.form-signin').exists()).toBe(true);
  });

});


describe('Renders email input', () => {
  it ('renders a email input', () => {
    expect(shallow(<Login />).find('#inputEmail').length).toEqual(1);
  });
});

describe('Renders password input', () => {
  it ('renders a Password input', () => {
    expect(shallow(<Login />).find('#inputPassword').length).toEqual(1);
  });
});

describe ('Email input', () => {

  it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<Login />);
    wrapper.find('#inputEmail').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

    expect(wrapper.state('email')).toEqual('blah@gmail.com');
  });
});

describe('Password input', () => {

  it('should respond to change event and change the state of the Login Component', () => {

    const wrapper = shallow(<Login />);
    wrapper.find('#inputPassword').simulate('change', {target: {name: 'password', value: 'cats'}});

    expect(wrapper.state('password')).toEqual('cats');
  });
});

describe('Form', () => {
  it('submit event when click submit', () => {
    const wrapper = mount(<Login />);
    wrapper.find('form').simulate('submit');
  });
});

