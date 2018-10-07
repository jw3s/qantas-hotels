import data from './__mocks__/data.json';

import type { HotelsState } from '../types/hotels';

export const GET_HOTELS = 'hotels/GET_HOTELS';
export const GET_HOTELS_SUCCESS = 'hotels/GET_HOTELS_SUCCESS';
export const GET_HOTELS_FAILED = 'hotels/GET_HOTELS_FAILED';
export const SORT_HOTELS = 'hotels/SORT_HOTELS';
export const SORT_HOTELS_SUCCESS = 'hotels/SORT_HOTELS_SUCCESS';
export const SORT_HOTELS_FAILED = 'hotels/SORT_HOTELS_FAILED';

export const sortHotels = (payload: 'ASC' | 'DESC') => (dispatch: Function, getState: Function) => {
  dispatch({ type: SORT_HOTELS });

  const funcMap = {
    ASC: (a, b) => a.price - b.price,
    DESC: (a, b) => b.price - a.price,
  };

  const { all } = getState().hotels;
  const sorted = all.sort(funcMap[payload]);

  dispatch({
    type: SORT_HOTELS_SUCCESS,
    payload: sorted,
  });
};

const hotelsMock = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

export const getHotels = () => async (dispatch: Function) => {
  dispatch({ type: GET_HOTELS });

  const response = await hotelsMock();

  dispatch({ type: GET_HOTELS_SUCCESS, payload: response });
  dispatch(sortHotels('ASC'));
};

const initState = {
  isLoading: false,
  all: [],
  sort: 'ASC',
  error: '',
};

export default function hotels(
  state: HotelsState = { ...initState },
  { type, payload }: { type: string, payload: any },
) {
  switch (type) {
    case GET_HOTELS:
      return {
        ...state,
        status: 0,
        isLoading: true,
        error: '',
      };
    case GET_HOTELS_SUCCESS:
      return { ...state, isLoading: false, all: payload };
    case GET_HOTELS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.errorMessage,
      };
    case SORT_HOTELS:
      return { ...state, isLoading: true };
    case SORT_HOTELS_SUCCESS:
      return { ...state, all: payload, isLoading: false };
    default:
      return state;
  }
}
