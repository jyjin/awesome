import React from 'react';
import { SideMenu } from './index';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = Enzyme;

// function mockUmi() {
//   const original = jest.requireActual('umi');
//   return {
//     ...original,
//     useSelector: (callback) => {
//       return callback;
//     },
//   };
// }
// jest.mock('umi', () => mockUmi());

test(`组件SideMenu应该有1个子元素`, (done) => {
  expect(shallow(<SideMenu />).children()).toHaveLength(1);
  done();
});
