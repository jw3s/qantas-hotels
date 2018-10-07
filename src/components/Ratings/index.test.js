import React from 'react';
import renderer from 'react-test-renderer';

import Ratings from '.';

import 'jest-styled-components';

describe('<Ratings />', () => {
  it('<Ratings /> should render tree with type star', () => {
    const tree = renderer.create(<Ratings value={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('<Ratings /> should render tree with type circle', () => {
    const tree = renderer.create(<Ratings value={5} type="circle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
