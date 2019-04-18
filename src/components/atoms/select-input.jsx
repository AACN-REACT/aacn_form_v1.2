import React, { useState, useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';

const myref = React.createRef();


export default function SelectInput(props){
    console.log("NNNN",props.options,props.parent)
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    let env="outside";
    const [count, setCount] = useState(0)

    function filterOptions( formstate, options, parent,dispatch){
        let env="inside"
        //selected={el.selected?true:false}
        console.log(count)
        if(parent){
            let thiskey = formstate[parent][1]
            let chosen = options.filter(el=>el.Parentkey===thiskey).filter(el=>el.selected==true)
             console.log("LIMA  BOOOOYAHHHHH!! PARENT STATE \n",formstate[parent], "\n THIS STATE \n",formstate[props.thisfield], "\n SHOULD BE \n" ,[chosen[0].name,chosen[0].key] )
            // console.log("LIMA COUNT", options.filter(el=>el.Parentkey===thiskey).filter(el=>el.selected==true))
            //
            console.log("BOOOOYAHHHHH!! -------  ", props['thisfield'] )
         if(chosen[0]['key']!==formstate[props.thisfield][1] && count<=2) { console.log("LIMA TRUE",chosen[0]['key'] ,formstate[props.thisfield][1]  ); dispatch(formAction("select",props['thisfield'], [chosen[0]['name'], chosen[0]['key']],env) ) ;setCount(count+1)}
     return options.filter(el=>el.Parentkey===thiskey).map(el=><option  selected={el.selected?true:false}>{el.name || el}</option>);
     }
     else {
         return options.map(el=><option  selected={el.selected?true:false}  key={el.key}>{el.name || el}</option>)
     }




     
    }
    //let initialSelected = props.options.filter(el=>el.Parentkey?el.Parentkey===options.filter())
    //useEffect(dispatch(formAction("select",props.thisfield, props.options.filter(el=>el.Parentkey?el.Parentkey===state[props.parent]:el)[0].name)),[state])
    return <label>{props.label || props.thisfield}  <select className={props.classes || 'form-control'} value={ state[props.thisfield][0]}
    onChange={e=>{let ans = props.options.filter(el=>el.name===e.target.value);setCount(0) ;
        dispatch(formAction("select",props.thisfield, [e.target.value, ans[0]['key']],env));} }>
        {filterOptions(state,props.options,props.parent,dispatch)}
        </select>
        </label>

}