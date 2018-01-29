import ButtonStyle from './ButtonStyle';

export default interface EditButtonProps {
  buttonStyle: ButtonStyle;
  handleClick(): void;
}