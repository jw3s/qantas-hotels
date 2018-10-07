import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4',
  mb: number,
};
const headingSizeMap = {
  h1: 22,
  h2: 18,
  h3: 14,
  h4: 12,
};
const Heading = styled(({ as: As = 'h1', ...props }: HeadingProps) => <As {...props} />)`
  font-size: ${({ as = 'h1' }) => headingSizeMap[as] || 34}px;
  margin: 0;
  margin-bottom: ${({ mb = 20 }) => mb}px;
  color: #000;
`;

const Label = styled.label`
  font-size: ${({ size = 16 }) => size}px;
  font-weight: ${({ weight = 100 }) => weight};
  margin-bottom: ${({ mb = 5 }) => mb}px;
  color: ${({ color = 'initial' }) => color};
`;

export default {
  Heading,
  Label,
};
