import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo_Component_Class from './Demo_Component_Class';
import Demo_Component_Functional from './Demo_Component_Functional';
import Avator from './Avator';
import Avator_list from './Avator_list';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hello World</h1>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Demo_Component_Class name="Sherry" />,
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Demo_Component_Functional name="Sherry" />,
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Avator />,
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
