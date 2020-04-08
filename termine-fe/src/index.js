import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mini.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import envConfig from './config'


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// On localhost use credentials from localstorage
envConfig.setup();