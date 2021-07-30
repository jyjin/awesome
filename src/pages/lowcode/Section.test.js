import React from 'react';
import Section from './Section';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = Enzyme;

test(`组件Section应该有一个class='section-box'的亲子DOM节点不为null`, () => {
  const wrap = shallow(<Section />);
  expect(wrap.find('.section-box')).not.toBeNull();
  // done()
});
