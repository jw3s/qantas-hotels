import hotels, * as hotelsTypes from './hotels';
import dataMock from './__mocks__/data.json';

describe('ducks/hotels', () => {
  const initState = {
    isLoading: false,
    all: [],
    sort: 'ASC',
    error: '',
  };

  test('>>> REDUCER >>> should return default state if type doesnt exit', () => {
    const state = hotels(initState, { type: 'hotels/RANDOM_ACTION' });
    expect(state).toEqual(initState);
  });
  test('>>> REDUCER >>> should simulate getHotels action', () => {
    const state = hotels(initState, {
      type: hotelsTypes.GET_HOTELS,
    });
    expect(state.isLoading).toEqual(true);
  });
  test('>>> REDUCER >>> should set SUCCESS response from getHotels', () => {
    const state = hotels(initState, {
      type: hotelsTypes.GET_HOTELS_SUCCESS,
      payload: dataMock,
    });
    expect(state.isLoading).toEqual(false);
    expect(state.all).toEqual(dataMock);
  });
  test('>>> ACTION >>> should call sortHotels', () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({ hotels: { all: dataMock } }));
    hotelsTypes.sortHotels('ASC')(dispatch, getState);
    expect(dispatch.mock.calls).toHaveLength(2);
    expect(dispatch).toBeCalledWith({ type: hotelsTypes.SORT_HOTELS });
    expect(dispatch.mock.calls[1][0].type).toEqual(hotelsTypes.SORT_HOTELS_SUCCESS);
  });
  test('>>> ACTION >>> should call getHotels', async () => {
    const dispatch = jest.fn();
    await hotelsTypes.getHotels()(dispatch);
    expect(dispatch.mock.calls).toHaveLength(3);
    expect(dispatch).toBeCalledWith({ type: hotelsTypes.GET_HOTELS });
    const action = dispatch.mock.calls[1][0];
    expect(action.type).toEqual(hotelsTypes.GET_HOTELS_SUCCESS);
    expect(action.payload).toHaveLength(5);
  });
});
