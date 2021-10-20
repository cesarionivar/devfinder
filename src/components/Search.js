import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const { setUserToSearch } = useContext(UserContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserToSearch(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='search'>
      <div className='search__icon'>
        <button className='btn'>
          <i className='fas fa-search'></i>
        </button>
      </div>
      <div className='search__input'>
        <input
          value={inputValue}
          onChange={handleChange}
          type='text'
          placeholder='Search Github username...'
        />
      </div>
      <div className='search__button'>
        <button type='submit' className='btn'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
