import React from 'react';
import { shallow, mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import HotelsHeader from '.';

import 'jest-styled-components';

describe('<HotelsHeader />', () => {
  it('<HotelsHeader /> should render tree', () => {
    const testState = {
      hotels: { all: [0, 1, 2, 3] },
    };
    const store = createMockStore(testState);

    const tree = shallow(<HotelsHeader />, { context: { store } });
    expect(tree).toMatchSnapshot();
  });
  it('<HotelsHeader /> should render tree', () => {
    const testState = {
      hotels: { all: [0, 1, 2, 3] },
    };
    const store = createMockStore(testState);

    const tree = shallow(<HotelsHeader />, { context: { store } });
    expect(tree).toMatchSnapshot();
  });
  it('<HotelsHeader /> should render total number of hotels', () => {
    const testState = {
      hotels: { all: [0, 1, 2, 3] },
    };
    const store = createMockStore(testState);

    const tree = mount(<HotelsHeader />, { context: { store } });
    // expect(tree).toMatchSnapshot();
    expect(tree.find('h2').text()).toEqual('4 hotels in Sydney');
  });
});
