// As it is ratahh mar looo imports ka

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './Demo_Component_Functional.css';

const Demo_Component_Functional = (props) =>{
        return <div className="maindiv_style">
        <h1>Hello {props.name} From Component Functional</h1>
        <p>I am Muhammad Shehryar</p>
        </div>
    }

// JSX== Java script ma HTML provided by react
// all the html must be enclosed in a single tag

export default Demo_Component_Functional