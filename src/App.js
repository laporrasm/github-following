import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchForm from './components/search-form/search-form.component';

import './App.css';

const App = () => {
  const [following, setFollowing] = useState([]);
  const [error, setError] = useState('');

  const onFormSubmit = (event, username) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((response) => response.json())
      .then((response) => {
        if (response.message) throw new Error(response.message);
        setFollowing(response);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className='App'>
      <h1>Github Following</h1>

      <SearchForm onSubmitHandler={onFormSubmit} />

      {!error && !following.length ? (
        <span>Search for a user!</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <CardList following={following} />
      )}
    </div>
  );
};

export default App;
