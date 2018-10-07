import React from 'react';
import renderer from 'react-test-renderer';

import Typography from '.';

import 'jest-styled-components';

const { Heading, Label } = Typography;

describe('<Typography />', () => {
  describe('<Heading/>', () => {
    it('<Heading /> should render h1 tree', () => {
      const tree = renderer.create(<Heading>This is heading</Heading>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('<Heading /> should render h2 tree', () => {
      const tree = renderer.create(<Heading as="h2">This is heading</Heading>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('<Heading /> should render h3 tree with no margin', () => {
      const tree = renderer
        .create(
          <Heading as="h2" mb={0}>
            This is heading
          </Heading>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('<Label/>', () => {
    it('<Label /> should render simple label tree', () => {
      const tree = renderer.create(<Label>This is label</Label>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('<Label /> should render label tree with 20px size weight bold', () => {
      const tree = renderer
        .create(
          <Label size={20} weight="bold">
            This is label
          </Label>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
