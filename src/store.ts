// import { Store, createStore, compose, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import { state, State } from './reducers';

// export const store: Store<State> = createStore(
//   state,
//   compose(
//     applyMiddleware(reduxThunk),
//   )
// );

import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { state, State } from './reducers';
import DevTools from './containers/DevTools';

const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk, createLogger()),
    DevTools.instrument()
  )
);
if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./reducers', () => {
    store.replaceReducer(state);
  });
}

export default store;