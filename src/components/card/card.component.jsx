import { useEffect, useState } from 'react';

import './card.styles.css';

const Card = ({ userSnap }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(userSnap.url)
      .then((response) => response.json())
      .then((user) => setUser(user));
  });

  return (
    <li className='card'>
      <img
        className='avatar'
        src={userSnap.avatar_url}
        alt={`${userSnap.login} github avatar`}
      />
      <h2>{userSnap.login}</h2>
      {user ? (
        <ul>
          <li className='info'>Followers: {user.followers}</li>
          <li className='info'>Following: {user.following}</li>
          <li className='info'>Repos: {user.public_repos}</li>
        </ul>
      ) : (
        <span>Loading...</span>
      )}
    </li>
  );
};

export default Card;
