import React, { PureComponent } from 'react';
import HotelsList from '../HotelsList';
import HotelsHeader from '../HotelsHeader';

class HotelsPage extends PureComponent<*> {
  render() {
    return (
      <>
        <HotelsHeader />
        <HotelsList />
      </>
    );
  }
}

export default HotelsPage;
