import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  width: 25px;
  height: 25px;
  clip-path: ${({ type }) => (type === 'star'
    ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    : 'circle(10px at center)')};
  background: #f7f7f7;
  cursor: pointer;

  > div {
    width: ${({ value }) => value}%;
    height: 25px;
    background: #f6e200;
  }
`;

const Rating = ({ value, type }: { value: number, type: string }) => (
  <RatingWrapper value={value} type={type}>
    <div />
  </RatingWrapper>
);

const RatingsWrapper = styled.div`
  display: flex;
`;

const getPercentageValue = (val: number, index: number): number => {
  if (index <= val) return 100;
  if (index > val + 1) return 0;
  return (val % 1) * 100;
};

const Ratings = ({ value: rating, type = 'star', ...rest }: { value: number, type?: 'star' | 'circle' }) => {
  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    stars.push(
      <Rating type={type} {...rest} value={getPercentageValue(rating, i)} key={`${i}`} index={i} />,
    );
  }

  return <RatingsWrapper>{stars}</RatingsWrapper>;
};
Ratings.defaultProps = {
  type: 'star',
};

export default Ratings;
