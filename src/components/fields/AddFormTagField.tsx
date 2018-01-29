import * as React from 'react';
import '../../styles/checkbox-fancy.css';

const AddTagItem = (props: any) => {
  return (
    <li>
      <input
        className="height-transition fancy"
        type="checkbox"
        onClick={(event) => props.handleTagClick(props.id, props.name)}
        value={props.name}
        style={{ ...props.style, height: props.style.height * 1.4 }}
        checked={props.checked}
      />
      <label
        className="height-transition"
        style={props.style}
        htmlFor={props.name}
      >
        {props.name}
      </label>
    </li>
  );
};

export const AddTagField = (props: any) => {
  return (
    <fieldset className="height-transition">
      <legend
        className="height-transition"
        style={{ ...props.style, height: props.style.height * 4 }}
      >
        Select related tags below:
      </legend>
      <ul className="tag-list">
        {props.tagArray.map((tagItem: any) => {
          return (
            <AddTagItem
              key={tagItem.id}
              handleTagClick={props.handleClick}
              id={tagItem.id}
              name={tagItem.name}
              style={props.style}
              checked={
                props.activeTagIds.indexOf(tagItem.id) === -1 ? false : true
              }
            />
          );
        })}
      </ul>
    </fieldset>
  );
};
