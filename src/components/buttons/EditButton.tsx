import * as React from 'react';
import EditButtonProps from '../../domains/EditButtonProps';

const EditButton = (props: EditButtonProps) => {
  return (
    <button
      style={props.buttonStyle}
      className="slide btn btn-success"
      onClick={props.handleClick}
    >
      <i className="fa fa-pencil" />
    </button>
  );
};

export default EditButton;