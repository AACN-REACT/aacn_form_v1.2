import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';







function FormWrapper({config, comp}){




//we dont want this function being run on every render so we will use a usEffect Hook that we can run just the once by passingin an empty array 
//as the second argument




}