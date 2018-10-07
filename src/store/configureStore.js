import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import type { HotelsState } from '../types/hotels';
import rootReducer from '../ducks';

type State = {
  hotels?: HotelsState,
};
export default function configureStore(initialState: State) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

  return store;
}
