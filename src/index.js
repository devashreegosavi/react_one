import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import { DataDemo } from './components/data-demo/data-demo';
import { DataTest } from './components/data-test/data-test';
import { DataTestStr } from './components/data-test-str/data-test-str';
import { DataMath } from './components/data-math/data-math';
import { DataStr } from './components/data-str/data-str';
import { StrFormat } from './components/str-format/str-format';
import { ObjDemo } from './components/obj_demo/obj_demo';
import { ArrDemo } from './components/arr_demo/arr_demo';
import { ArrObjDemo } from './components/arr_obj_demo/arr_obj_demo';
import { LocalDataAccess } from './components/local_data_access/local_data_access';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap'; //for javascript js file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalDataAccess />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
