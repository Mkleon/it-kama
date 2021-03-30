import React from 'react';
import ReactDOM from 'react-dom';
import KamaApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KamaApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
