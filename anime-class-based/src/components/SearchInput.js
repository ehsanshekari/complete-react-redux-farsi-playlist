import { useState } from 'react';

function SearchInput({onFormSubmit, initialValue}) {
  const [term, setTerm] = useState(initialValue);


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search an Anime"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
