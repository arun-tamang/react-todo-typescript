import * as React from 'react';
import TagField from '../fields/SearchTagField';
import SearchTodoProps from '../../domains/SearchTodoProps';

const SearchTodoForm = (props: SearchTodoProps) => {

  let handleKeyChange = (event: any) => {
    props.handleKeyChange(event.target.value);
  };

  return (
    <form style={{ margin: '0 auto' }}>
      <input
        className="search-input"
        type="text"
        placeholder="keywords"
        onChange={handleKeyChange}
      />
      <TagField tagArray={props.availableTags} handleCheckBoxClick={props.handleTagClick} />
      <button type="button" className="btn btn-primary" onClick={props.handleSearchClick}>
        Search
      </button>
    </form>
  );
};

export default SearchTodoForm;
