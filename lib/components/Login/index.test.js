import React from 'react';
import { shallow } from 'enzyme';
import Input from './Login';

// eslint-disable-next-line no-undef
describe('Input component', () => {
  // eslint-disable-next-line no-undef
  it('renders input', () => {
    const component = shallow(
      <Input/>
    );
      // eslint-disable-next-line no-undef
    expect(component.exists('input')).toBe(true);
  });
});

