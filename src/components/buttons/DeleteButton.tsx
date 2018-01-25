import * as React from 'react';

export interface ButtonStyle {
  margin: string;
  padding: string;
}

export interface DeleteButtonProps {
  buttonStyle: ButtonStyle;
  handleClick(): void;
}

const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <button
      style={props.buttonStyle}
      className="btn btn-danger"
      onClick={props.handleClick}
    >
      <i className="fa fa-trash" />
    </button>
  );
};

export default DeleteButton;