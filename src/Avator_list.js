import React from 'react';
import ReactDOM from 'react-dom';
import './Avator_list.css';
import 'tachyons';

const Avator_list = (props) =>{
    return (
        <div className="avatar_style ma4 bg-light-purple dib pa4 tc grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="sherry"/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avator_list;