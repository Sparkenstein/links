import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/custom.scss'
import * as serviceWorker from './serviceWorker';
import 'choices.js/public/assets/styles/choices.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
