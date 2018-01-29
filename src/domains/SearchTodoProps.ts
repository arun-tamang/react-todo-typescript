import TagItem from './TagItem';

export default interface SearchTodoProps {
  availableTags: TagItem[];  
  handleSearchClick(): void;
  handleKeyChange(keywords: string): void;
  handleTagClick(newTag: string): void;
}