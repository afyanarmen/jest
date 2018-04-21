import React from 'react';
import Counter from './counter';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Counter component', ()=>{
  test('matches snapshot', ()=>{
    const component = renderer.create(<Counter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('clicking the button increases the counter', ()=>{
    const component = shallow(<Counter />);
    const prevValue = component.find('p').text();
    component.find('button').simulate('click');
    const currValue = component.find('p').text();
    expect(currValue - prevValue).toEqual(1);
  });
});