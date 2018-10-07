import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Card, Typography, AmountLabel, Ratings,
} from '../../components';
import type { Hotels } from '../../types/hotels';

import { getHotels } from '../../ducks/hotels';

const CardInfo = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  justify-content: space-between;
`;
const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardDetails = styled.div`
  flex: 0.25 0 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 619px) {
    margin-top: 40px;
  }
`;
const CardExtended = styled(Card)`
  &::before {
    position: absolute;
    content: '${({ content }) => content}';
    padding: 7px 20px;
    font-weight: 500;
    color: white;
    font-size: 12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #cd0000;
    top: 10px;
    left: 0;
  }
`;

type Props = {
  getHotels: Function,
  hotels: Array<Hotels>,
  isLoading: boolean,
};

class HotelsList extends Component<Props> {
  componentDidMount() {
    const { getHotels: get } = this.props;
    get();
  }

  render() {
    const { hotels, isLoading } = this.props;
    if (isLoading) {
      return <Spinner type="Bars" color="#cd0000" height={80} width={80} />;
    }
    return (
      <div>
        {hotels.map(
          ({
            id,
            image,
            title,
            address,
            price,
            savings,
            rating,
            ratingType,
            freeCancellation,
            promotion,
            ...data
          }) => (
            <CardExtended key={id} image={image} content={promotion}>
              <CardInfo>
                <CardInfoContainer>
                  <Typography.Heading as="h2" mb={5}>
                    {title}
                  </Typography.Heading>
                  <Typography.Label size={12} mb={20}>
                    {address}
                  </Typography.Label>
                  <Typography.Label weight={500} size={12}>
                    {data.name || data.roomName}
                  </Typography.Label>
                </CardInfoContainer>
                {freeCancellation && (
                  <Typography.Label size={13} color="#1c6d4a">
                    Free cancellation
                  </Typography.Label>
                )}
              </CardInfo>
              <CardDetails>
                <Ratings value={rating} type={ratingType === 'self' ? 'circle' : 'star'} />
                <div>
                  <Typography.Label size={11}>
                    <b>1</b>
                    {' '}
night total in (AUD)
                  </Typography.Label>
                  <AmountLabel>{price}</AmountLabel>
                  {savings > 0 && (
                    <Typography.Label color="#fb0101" size={13} weight="700">
                      {`You save $${savings}~`}
                    </Typography.Label>
                  )}
                </div>
              </CardDetails>
            </CardExtended>
          ),
        )}
      </div>
    );
  }
}

export default connect(
  ({ hotels: { all, isLoading } }) => ({ hotels: all, isLoading }),
  { getHotels },
)(HotelsList);
