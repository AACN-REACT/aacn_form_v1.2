
import React,{useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AACNFORM from './components/organisms/aacnform'
import myConfig from './data/myconfig';
import promisePolyFill from './utils/promise-pollyfill'
//this is where we will compile our form , it will form the starting point for our component to be inserted
promisePolyFill()
function App(props){

   return (
       <AACNFORM config={myConfig} />
   )
}



ReactDOM.render(<App config={myConfig} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
