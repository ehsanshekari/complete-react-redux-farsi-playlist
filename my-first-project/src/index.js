import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="container">
    <Card />
    <Card />
  </div>
);
