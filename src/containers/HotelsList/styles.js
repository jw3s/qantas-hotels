import styled from 'styled-components';
import { Card } from '../../components';

export const CardInfo = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  justify-content: space-between;
`;
export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardDetails = styled.div`
  flex: 0.25 0 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 619px) {
    margin-top: 40px;
  }
`;
export const CardExtended = styled(Card)`
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
    z-index: 1;
  }
`;
