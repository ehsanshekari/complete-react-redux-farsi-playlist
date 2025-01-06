import React from 'react';
import ReactDOM from 'react-dom/client';
import SubscriptionForm from './components/SubscriptionForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="container">
    <SubscriptionForm />
    <SubscriptionForm />
  </div>
);
