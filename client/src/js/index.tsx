import "./config/hotLoaderConfig";
import React from "react";
import { Store } from 'redux';
import { Provider } from "react-redux";
import { render } from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { AppContainer } from "react-hot-loader";
import { PersistGate } from 'redux-persist/integration/react'

import configureStore, { history } from './config/configureStore'
import { IApplicationState } from './reducers';
import registerServiceWorker from './../registerServiceWorker';
import App from "./containers/App";
``
import '../styles/style.scss';

// load open sans from google fonts and local font-awesome 
import './config/fontLoader';
declare let module: any


interface MainProps {
  history: History
  store: Store<IApplicationState>
}

// mount it on the Store
const initialState = {}
const {store, persistor} = configureStore(history, initialState);
// const store = configureStore(initialState);

const Renderer = (Root: any) =>
  render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <ConnectedRouter history={history}>
            {/* <Router>  not to be used*/}
              <Root />
            {/* </Router> */}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );

// initial render
Renderer(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();
registerServiceWorker();


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const HotApp = require("./containers/App").default;
    Renderer(HotApp);
  });
}


/* NOTE 
  https://github.com/resir014/react-redux-typescript-example
  https://github.com/TrillCyborg/fullstack/tree/master/server
  https://github.com/avajs/ava for test code
  https://github.com/cassiolpaixao90/boilerplate-react-redux-pwa
  https://github.com/IncredibleWeb/React-PWA-Boilerplate for PWA
  https://medium.com/learning-lab/how-pwas-works-and-how-i-implemented-it-with-react-and-webpack-523381b1b7a4
  https://scotch.io/tutorials/how-to-make-your-existing-react-app-progressive-in-10-minutes
  https://github.com/gilbarbara/react-redux-saga-boilerplate

  Testing
  https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
  
*/

/* TODO To be helpful
  1. react-resize-detector
  2. 
  3. 
*/
