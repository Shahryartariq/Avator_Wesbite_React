import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import './Avator.css';
import Avator_list from './Avator_list';
import 'tachyons';

class Avator extends Component{
    
    constructor(){
        super();
        this.state ={
            name: "Welcome To The React JS"
        }
    }

    newName(){
        this.setState({
            name: "Sherry 😊"
        })
    }
        render(){
            const employees = [
                {
                    id: 1,
                    name: "sherry",
                    work: "Full Stack Developer"
                },
                {
                    id: 2,
                    name: "Atab",
                    work: "Graphic Designer"
                },
                {
                    id: 3,
                    name: "Ashar",
                    work: "Flutter Developer"
                },
                {
                    id: 4,
                    name: "Haris",
                    work: "Core PHP Developer"
                }
             ]
         
             const employeemap = employees.map( (allEmployees,i)=>{
                 return <Avator_list key={i} id={employees[i].id} name={employees[i].name} work={employees[i].work}/>
             })
        return (
            <div className="main_page">
            <h1 className="tc mt5">{this.state.name}</h1>
            {employeemap}
            <div className="box_center mt4">
            <button onClick={ ()=>{this.newName();}}className="btn">Sherry</button>
            </div>
        </div>

        )
    }
}

export default Avator