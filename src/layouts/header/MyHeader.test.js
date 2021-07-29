import React from 'react';
import MyHeader from './MyHeader';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = Enzyme;

test(`组件MyHeader应该有一个class='header'的亲子DOM节点`, () => {
  const wrap = shallow(<MyHeader />);
  expect(wrap.find('.header')).toHaveLength(1);
  // done()
});
