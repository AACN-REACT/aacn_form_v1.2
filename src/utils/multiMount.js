
import React from 'react'; 
import ReactDOM from 'react-dom'; 


export default function multiMount(el_identifier, component){

    let MyComponent = component;
    let myNodeList = document.querySelectorAll(`div[id^="${el_identifier}"]`)   //'div[id^="form"]'
    //using a 'for..in' loop rather than forEach as ie11 does not seem to treat Nodelists as Arrays and cannot use Array.from()
    // Must not use 'for..of' since it breaks ie11
      for(let i =0;i<myNodeList.length;i++){
       //JSON.parse(myNodeList[i].dataset.config)
        ReactDOM.render(<MyComponent  config={myNodeList[i].dataset.config[0]!=='{'?require(`./data/${myNodeList[i].dataset.config}.js`):JSON.parse(myNodeList[i].dataset.config)} />, myNodeList[i])
      }
    
      myNodeList.forEach(el=>ReactDOM.render(<MyComponent config={el.dataset.config[0]!=='{'?require(`./data/${el.dataset.config}.js`):JSON.parse(el.dataset.config)} />,el))
    console.log(window.globalVar)
    //myNodeList.filter((el,i)=>{/^form/.test(el.id)}).forEach(el=>el.innerHTML="form")
    
    
    }