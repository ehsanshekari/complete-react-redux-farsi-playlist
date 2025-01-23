import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Fruits from './Fruits';
// import Counter from './Counter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <Fruits />
  </StrictMode>
);
