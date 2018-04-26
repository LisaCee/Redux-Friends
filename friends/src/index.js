import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from '../src/reducers/rootReducer';



const mw = applyMiddleware(thunk,logger);

const store = createStore(rootReducer,mw);
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));

