import TagItem from './TagItem';

export default interface TagFieldProps {
  tagArray: TagItem[];
  handleCheckBoxClick(newTag: string): void;
}