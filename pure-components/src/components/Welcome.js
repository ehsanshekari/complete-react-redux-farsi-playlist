import {memo} from 'react';

const Welcome = ({ welcomeMessage }) => {
  console.log('--------- Welcome Component ---------');

  return (
    <div className="mt-5">
      <div className="alert alert-primary text-center">
        {welcomeMessage}
      </div>
    </div>
  );
};

export default memo(Welcome);
