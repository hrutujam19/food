import React from "react";
import  ReactDOM  from "react-dom";
import'./index.css';
 import App from './App';
import reportWebVitalas from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
reportWebVitalas();

