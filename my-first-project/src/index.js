import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
// import StyledComponent from './components/StyledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="container">
    <Card />
    <Card />
    {/* <StyledComponent /> */}
  </div>
);
