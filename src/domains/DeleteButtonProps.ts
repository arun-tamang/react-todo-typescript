import ButtonStyle from './ButtonStyle';

export default interface DeleteButtonProps {
  buttonStyle: ButtonStyle;
  handleClick(): void;
}