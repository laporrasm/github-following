import { useState } from 'react';

import './search-form.styles.css';

const SearchForm = ({ onSubmitHandler }) => {
  const [inputField, setInputField] = useState('');

  const onInputChange = (event) => {
    setInputField(event.target.value);
  };

  return (
    <form
      className='search-form'
      onSubmit={(event) => onSubmitHandler(event, inputField)}
    >
      <input
        className='search-form__input'
        type='search'
        onChange={onInputChange}
        placeholder='Username'
      />
      <button className='search-form__button'>Search</button>
    </form>
  );
};

export default SearchForm;
