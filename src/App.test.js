import React from 'react';
import ReactDOM from 'react-dom';
import OldCoffeesApp from './OldCoffeesApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OldCoffeesApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
