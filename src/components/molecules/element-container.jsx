import React, { Component } from 'react';
import TextInput from '../atoms/text-input'
import SelectInput from '../atoms/select-input'


const ElementContainer = {

    container: <div> this is  a test jsx component </div>,
    text: (props)=><TextInput {...props} />,
    select: (props)=> <SelectInput {...props} />

}

export default ElementContainer;