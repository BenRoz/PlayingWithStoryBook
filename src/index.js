import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FormExample from './components/bootstrap_page';

ReactDOM.render(<FormExample/>, document.getElementById('root'));
registerServiceWorker();
