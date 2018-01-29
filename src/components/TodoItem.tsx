import * as React from 'react';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import TodoItemProps from '../domains/TodoItemProps';

const Todo = (props: TodoItemProps) => {

  return (
    <li className="todo">
      <EditButton buttonStyle={props.buttonStyle} handleClick={props.handleEdit} />
      <DeleteButton
        buttonStyle={props.buttonStyle}
        handleClick={props.handleDelete}
      />
      <span> {props.title} </span>
      <ul className="todo-tags-list">
        <i className="fa fa-tags" />
        {props.tags.map((tagItem, index) => (
          <li key={index}>
            <a>{tagItem}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Todo;
