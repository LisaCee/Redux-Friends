import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './Reducers';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'));
registerServiceWorker();
