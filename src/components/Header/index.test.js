import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

import 'jest-styled-components';

describe('<Header />', () => {
  it('<Header /> snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
