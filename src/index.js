import './processGlobals.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './app.js'

import 'Assets/css/main.scss';

// import 'sanitize.css/sanitize.css';
// import './assets/css/main.css';
// import './assets/css/override.css';
// import './assets/css/rdt.css';
// import "Components/Elements/Button/Button.css";
// import 'react-select/dist/react-select.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
);