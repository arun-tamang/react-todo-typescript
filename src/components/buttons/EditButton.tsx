import * as React from 'react';

export interface ButtonStyle {
  margin: string;
  padding: string;
}

export interface EditButtonProps {
  buttonStyle: ButtonStyle;
  handleClick(): void;
}

const EditButton = (props: EditButtonProps) => {
  let handleClick = () => {
    props.handleClick();
  };

  return (
    <button
      style={props.buttonStyle}
      className="btn btn-success"
      onClick={handleClick}
    >
      <i className="fa fa-pencil" />
    </button>
  );
};

export default EditButton;