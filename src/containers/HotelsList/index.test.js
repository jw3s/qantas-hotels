import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import HotelsList from '.';

import 'jest-styled-components';

describe('<HotelsList />', () => {
  it('<HotelsList /> should render tree', () => {
    const testState = {
      hotels: { all: [0, 1, 2, 3], isLoading: false },
    };
    const store = createMockStore(testState);

    const tree = shallow(<HotelsList />, { context: { store } });
    expect(tree).toMatchSnapshot();
  });
  it('<HotelsList /> should render spinner if loading is true', () => {
    const testState = {
      hotels: { all: [0, 1, 2, 3], isLoading: true },
    };
    const store = createMockStore(testState);

    const tree = shallow(<HotelsList />, { context: { store } });
    expect(tree).toMatchSnapshot();
  });
});
