import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

const index = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(index, document.getElementById('root'));
registerServiceWorker();
