import * as React from 'react';
import { AddTagField } from '../fields/AddFormTagField';

const AddTodoForm = (props: any) => {
  let handleTitleChange = (event: any) => {
    props.setTitleToAdd(event.target.value);
  };

  const handleAddTagClick = (id: number, name: string) => {
    props.setTagIdsToAdd(id);
    props.setTagNamesToAdd(name);
  };

  let opacity = props.height === 0 ? 0 : 1;
  let tagFieldHeight = props.height === 0 ? 0 : 10;

  return (
    <form
      className="form-inline height-transition"
      style={{ margin: '0 auto' }}
    >
      <div className="clearfix add-form-upper">
        <input
          className="height-transition add-form-input"
          type="text"
          placeholder="add todo title here..."
          onChange={handleTitleChange}
          value={props.addTitle}
          style={{ height: props.height, opacity }}
        />
        <button
          type="button"
          className="add-submit-button btn btn-primary height-transition"
          onClick={props.handleAddSubmit}
          style={{ height: props.height, opacity }}
        >
          Add
        </button>
      </div>
      <AddTagField
        activeTagIds={props.activeTagIds}
        tagArray={[...props.availableTags]}
        handleClick={handleAddTagClick}
        style={{ height: tagFieldHeight, opacity }}
      />
    </form>
  );
};

export default AddTodoForm;
