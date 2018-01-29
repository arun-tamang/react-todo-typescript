import * as React from 'react';
import DeleteButtonProps from '../../domains/DeleteButtonProps';

const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <button
      style={props.buttonStyle}
      className="slide btn btn-danger"
      onClick={props.handleClick}
    >
      <i className="fa fa-trash" />
    </button>
  );
};

export default DeleteButton;