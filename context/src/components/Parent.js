import React from 'react';
import Child from './Child';

function Parent() {
  return (
    <div className='p-3 mb-3 border'>
      <h3>This is the Parernt</h3>
      <Child />
    </div>
  );
}

export default Parent;
