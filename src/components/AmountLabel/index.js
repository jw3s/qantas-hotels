import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string | number,
  symbol?: string,
};
const Wrapper = styled.span`
  display: flex;
  margin: 7px;
`;
const Currency = styled.sup`
  font-size: 1.2rem;
`;
const Label = styled.label`
  font-size: 3rem;
`;
const AmountLabel = ({ children, symbol }: Props) => (
  <Wrapper>
    <Label>
      <Currency>{symbol}</Currency>
      {children}
    </Label>
  </Wrapper>
);
AmountLabel.defaultProps = {
  symbol: '$',
};

export default AmountLabel;
