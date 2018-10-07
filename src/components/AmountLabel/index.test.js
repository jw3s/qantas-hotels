import React from 'react';
import renderer from 'react-test-renderer';

import AmountLabel from '.';

import 'jest-styled-components';

describe('<AmountLabel />', () => {
  it('<AmountLabel /> should render tree', () => {
    const tree = renderer.create(<AmountLabel>500</AmountLabel>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
