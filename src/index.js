import React from 'react'; //react -> module, React -> object imported from the module
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

const element = <h1>Hello World!</h1>;
console.log(element);
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker;
