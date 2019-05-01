
import React,{useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AACNFORM from './components/organisms/aacnform';
import FormWrapper from './components/organisms/form-wrapper';
import {myConfig, myConfig2} from './data/myconfig';
import promisePolyFill from './utils/promise-pollyfill'
//this is where we will compile our form , it will form the starting point for our component to be inserted
promisePolyFill()

localStorage.setItem("customer","Mickey Mouse")

function QuickComponent(props){

    return <div><h1>{props.name}</h1></div>
}
const New = FormWrapper(AACNFORM,myConfig2)



function App({config}){


   return (
       <>
       <h1>WRAPPED FORM</h1>
       {New}
       <br/>
       <br/>
       <br/>
       <h1>NO WRAP</h1>
       <AACNFORM config={config} />
       </>
   )
}



ReactDOM.render(<App config={myConfig}/>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
