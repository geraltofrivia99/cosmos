import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import App from './App';
import Daily from './Pages'
import { DailyStore } from './store';
import * as serviceWorker from './serviceWorker';

const dayliStore = new DailyStore();

const rootEl = document.getElementById('root')
// ReactDOM.render(<App />, rootEl)
// const root = ReactDOM.createRoot(rootEl)
// root.render(<Daily dayliData={dayliStore} />)
ReactDOM.render(<Daily dayliData={dayliStore} />, rootEl)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
