import React from 'react';
import renderer from 'react-test-renderer';

import Select from '.';

import 'jest-styled-components';

const options = [
  {
    label: 'Price low-high',
    value: 'ASC',
  },
  {
    label: 'Price high-low',
    value: 'DESC',
  },
];

describe('<Select />', () => {
  it('<Select /> should render tree', () => {
    const tree = renderer.create(<Select label="Sort by" options={options} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
