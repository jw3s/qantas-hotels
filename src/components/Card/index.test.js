import React from 'react';
import renderer from 'react-test-renderer';
import Card from '.';

import 'jest-styled-components';

describe('<Card />', () => {
  it('<Card /> should render tree', () => {
    const tree = renderer
      .create(
        <Card image="https://unsplash.it/700/500?random&mp;sig=1">
          <div>Card test</div>
        </Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('<Card /> should not render image if not provided', () => {
    const tree = renderer
      .create(
        <Card>
          <div>Card test</div>
        </Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
