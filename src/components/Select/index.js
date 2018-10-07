import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

const { Heading } = Typography;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.select`
  display: block;
  outline: none;
  color: inherit;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  background-color: white;
  margin-left: 7px;
`;

type Option = { label: string, value: string };
type Props = {
  label: string,
  options: Array<Option>,
};

const Select = ({ label, options, ...props }: Props) => (
  <Wrapper>
    <Heading as="h3" mb={0}>
      {label}
    </Heading>
    <Dropdown {...props}>
      {options.map((m: Option) => (
        <option key={`${m.value}`} value={m.value}>
          {m.label}
        </option>
      ))}
    </Dropdown>
  </Wrapper>
);

export default Select;
