import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import { Login } from './components/login/login';
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
import { LocalDataFetch } from './components/local_data_fetch/local_data_fetch';
import { LocalDataJq } from './components/local_data_jq/local_data_jq';
import { LocalDataJqThirdp } from './components/local_data_jq_thirdp/local_data_jq_thirdp';
import { NasaApi } from './components/nasa_api/nasa_api';
import { NasaApiTwo } from './components/nasa_api_two/nasa_api_two';
import { DataBinding } from './components/data-binding/data-binding';
import { EventBindingN } from './components/event-binding_n/event-binding_n';
import { EventBindingCustom } from './components/event_binding_custom/event_binding_custom';
import { EventBinding } from './components/event-binding/event-binding';
import { MouseDemo } from './components/mouse-demo/mouse-demo';
import { MouseAnimation } from './components/mouse-animation/mouse-animation';
import { MouseAnimationTwo } from './components/mouse-animation-two/mouse-animation-two';
import { MouseAnimationDemo } from './components/mouse-animation-demo/mouse-animation-demo';
import { MouseDynamicAnimation } from './components/mouse-dynamic-animation/mouse-dynamic-animation';
import { MouseAnimationMove } from './components/mouse-animation-move/mouse-animation-move';
import { KeyDemo } from './components/key_demo/key_demo';
import { ElementState } from './components/element-state/element-state';
import { ElementStateCheckbox } from './components/element-state-checkbox/element-state-checkbox';
import { ButtonDemo } from './components/button-demo/button-demo';
import { ClipboardDemo } from './components/clipboard-demo/clipboard-demo';
import { EmiCalculator } from './components/emi-calculator/emi-calculator';
import { TimeoutDemo } from './components/timeout-demo/timeout-demo';
import { TimeoutEvent } from './components/timeout-event/timeout-event';
import { IntervalDemo } from './components/interval-demo/interval-demo';
import { IntervalEvent } from './components/interval-event/interval-event';
*/

import { DateDemo } from './components/date-demo/date-demo';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap'; //for javascript js file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DateDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
