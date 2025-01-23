import React from 'react';

function withLoading(Component) {
  return function ComponentWithLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;

    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '200px' }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };
}

export default withLoading;
