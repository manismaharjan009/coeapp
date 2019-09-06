import { Store, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import { History, createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import localForage from 'localforage'; // to save the data in IndexedDB

import rootReducer, { IApplicationState } from '../reducers';
import rootSaga from '../sagas';
declare let module: any
declare let process: any

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: localForage,
}

interface IStore {
  runSaga: any;
  injectedReducers: any;
  injectedSagas: any;
  replaceReducer: any;
}

export default function configureStore(
  history: History,
  initialState: IApplicationState
): Store<IApplicationState> {

  const middlewares = [sagaMiddleware, routerMiddleware(history)]; // for dispatching history actions
  // const middlewares = [sagaMiddleware]; 

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose   
  const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;


  const store: IStore = createStore(
    // rootReducer, // root reducer with router state
    // rootReducer(history), // root reducer with router state
    //@ts-ignore
    persistReducer(persistConfig, rootReducer(history)),
    initialState,
    composeEnhancers(...enhancers),
    // composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  // The storage changed to IndexedDB thanks to localForage and the reducers that are blacklisted
  const persistor  = persistStore(store);

  // Extensions
  store.runSaga = sagaMiddleware.run(rootSaga);
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  
  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      //@ts-ignore
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  // return store;
  //@ts-ignore
  return { store, persistor};
}