import React from 'react';
import { default as SideMenu } from './SideMenu';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = Enzyme;

jest.mock('umi', () => {
  return {
    useRequest: (callback) => {
      return callback;
    },
  };
});
test(`组件SideMenu应该有1个子元素 `, () => {
  expect(shallow(<SideMenu />)).toHaveLength(1);
});
