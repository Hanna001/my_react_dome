import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducers} from './reducers/index.js'

let store=createStore(reducers);
// store.subscribe(()=>{//可以获取监听
//     console.log(store.getState())
// } 
// )
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
 document.getElementById('root'));
registerServiceWorker();
