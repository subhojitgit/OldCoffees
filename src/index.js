import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OldCoffeesApp from './OldCoffeesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OldCoffeesApp />, document.getElementById('root'));
registerServiceWorker();
