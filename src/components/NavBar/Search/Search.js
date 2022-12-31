import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
  };
  console.log(search);
  return (
    <>
      <form className="search__form" action="">
        <input
          className="search__field"
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search__submit__btn"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Search;
