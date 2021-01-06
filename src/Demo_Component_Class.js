// As it is ratahh mar looo imports ka

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './Demo_Component_Class.css';


class Demo_Component_Class extends Component{
    render(){
        return <div className="maindiv_style">
        <h1>Hello {this.props.name} From Component Class</h1>
        <p>I am Muhammad Shehryar</p>
        </div>
    }
}

// JSX== Java script ma HTML provided by react
// all the html must be enclosed in a single tag

export default Demo_Component_Class