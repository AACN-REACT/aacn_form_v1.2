import React, { useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';

const myref = React.createRef();


export default function SelectInput(props){

    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)


    function filterOptions( formstate, options, parent){

        //selected={el.selected?true:false}
     if(parent){
         console.log("parent key",formstate[parent] )
        let thiskey = formstate[parent][1]
        console.log("parent key key", thiskey,options)
     return options.filter(el=>el.Parentkey===thiskey).map(el=><option >{el.name || el}</option>);
     }
     else {
         return options.map(el=><option  key={el.key}>{el.name || el}</option>)
     }

    }
    //let initialSelected = props.options.filter(el=>el.Parentkey?el.Parentkey===options.filter())
    //useEffect(dispatch(formAction("select",props.thisfield, props.options.filter(el=>el.Parentkey?el.Parentkey===state[props.parent]:el)[0].name)),[state])
    return <label>{props.label || props.thisfield}  <select className={props.classes || 'form-control'} defaultValue={state[props.thisfield][0]?state[props.thisfield][0]:props.options.filter(el=>el.selected)[0].name}
    onChange={e=>{let ans = props.options.filter(el=>el.name===e.target.value);
        dispatch(formAction("select",props.thisfield, [e.target.value, ans[0]['key']])); } }>
        {filterOptions(state,props.options,props.parent)}
        </select>
        </label>

}