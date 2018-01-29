import * as React from 'react';
import '../../styles/checkbox-fancy.css';
import TagFieldProps from '../../domains/TagFieldProps';

interface TagItemProps {
  name: string;
  handleClick(name: string): void;
}

const TagItem = (props: TagItemProps) => {

  const handleClick = (e: any) => {
    props.handleClick(props.name);
  };

  return (
    <li>
      <input
        className="fancy"
        type="checkbox"
        onClick={handleClick}
        value={props.name}
      />
       {props.name}
    </li>
  );
};

const TagField = (props: TagFieldProps) => {
  const handleClick = (name: string) => {
    props.handleCheckBoxClick(name);
  };
  return (
    <fieldset>
      <legend>Tags</legend>
      <ul className="tag-list">
        {props.tagArray.map((tagItem) => (
          <TagItem
            key={tagItem.id}
            handleClick={handleClick}
            name={tagItem.name}
          />
        ))}
      </ul>
    </fieldset>
  );
};

export default TagField;
