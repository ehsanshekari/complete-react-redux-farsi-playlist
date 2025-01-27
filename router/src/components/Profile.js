import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
    const {id} = useParams();
    const navigate = useNavigate();

  return (
    <div>
      This is profile for the user with id: {id}
      <button onClick={() => {navigate('/')}}>Back to Home Page!</button>
    </div>
  )
}

export default Profile
