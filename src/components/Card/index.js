import React, { PureComponent } from 'react';
import Spinner from 'react-loader-spinner';
import type { Element } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  display: flex;
  background: #fff;
  margin-bottom: 10px;
  color: #54545e;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  overflow: hidden;
  position: relative;
`;

const CardImageWrapper = styled.div`
  overflow: hidden;
  flex: 0 0 25%;
  min-width: 250px;
  display: flex;
  @media (max-width: 900px) {
    max-height: 250px;
  }
  > div {
    margin: auto;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 200ms ease;
  :hover {
    transform: scale(1.1);
  }
  ${({ status }) => status === 'loading' && { display: 'none' }};
`;

const CardBody = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

type Props = {
  image?: string,
  children: Element<*> | Array<Element<*>>,
};
type State = {
  imageStatus: 'loading' | 'loaded' | 'failed',
};

class Card extends PureComponent<Props, State> {
  state = {
    imageStatus: 'loading',
  };

  static defaultProps = {
    image: '',
  };

  render() {
    const { imageStatus } = this.state;
    const { image, children, ...props } = this.props;
    return (
      <CardWrapper {...props}>
        {image && (
          <CardImageWrapper>
            {imageStatus === 'loading' && (
              <Spinner type="ThreeDots" color="#cd0000" height={30} width={30} />
            )}

            <CardImage
              status={imageStatus}
              onLoad={() => {
                this.setState({ imageStatus: 'loaded' });
              }}
              src={image}
            />
          </CardImageWrapper>
        )}
        <CardBody>{children}</CardBody>
      </CardWrapper>
    );
  }
}

export default Card;
