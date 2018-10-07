import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Typography, Select } from '../../components';

import { sortHotels } from '../../ducks/hotels';

const { Heading } = Typography;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Italic = styled.label`
  font-style: italic;
  font-weight: 100;
`;

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

type Props = {
  count: number,
  dispatch: Function
}
class HotelsHeader extends PureComponent<Props> {
  handleSort = (e: any) => {
    const { dispatch } = this.props;
    dispatch(sortHotels(e.currentTarget.value));
  };

  render() {
    const { count } = this.props;
    if (!count) return null;
    return (
      <Wrapper>
        <Heading as="h2" mb={0}>
          {count}
          {' '}
          <Italic>hotels in</Italic>
          {' '}
          Sydney
        </Heading>
        <Select label="Sort by" options={options} onChange={this.handleSort} />
      </Wrapper>
    );
  }
}

export default connect(
  ({ hotels }) => ({ count: hotels.all.length }),
)(HotelsHeader);
