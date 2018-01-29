import * as React from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';
import AddTodoForm from './forms/AddTodo';
import SearchTodoForm from './forms/SearchTodo';
import TodoList from '../domains/TodoList';
import PopupEdit from './forms/PopUpEdit';
import TodoListProps from '../domains/TodoListProps';

// import SERVICES from '../services';

const TodoList: React.SFC<TodoListProps> = (props: TodoListProps) => {
  return (
    <div>
      {props.showPopUp ? (
        <PopupEdit
          title={props.popUpEditTitle}
          closePopUp={props.closePopUp}
          changeTitle={props.setPopUpEditTitle}
        />
      ) : null}
      <div className="container">
        <div className="add-button-container">
          <button onClick={props.toggleAddForm} className="fa fa-plus" />
        </div>
        <div className="add-wrapper">
          <AddTodoForm
            height={props.addFormHeight}
            addTitle={props.todoToAdd.title}
            activeTagIds={props.todoToAdd.tagIds}
            availableTags={props.availableTags}
            expiryDate={props.todoToAdd.expiresAt}
            handleAddSubmit={props.handleAdd}
            setTitleToAdd={props.setTitleToAdd}
            setExpDateToAdd={props.setExpDateToAdd}
            setTagIdsToAdd={props.setTagIdsToAdd}
            setTagNamesToAdd={props.setTagNamesToAdd}
          />
        </div>
        <div className="todos-container">
          <h2 className="todo-header">{props.title}</h2>
          <ul className="todo-list">
            {props.todos.map((item, i) => (
              <TodoItemContainer
                key={String(item.id)}
                id={item.id}
                title={item.title}
                tags={item.tags}
              />
            ))}
          </ul>
        </div>
        <div className="search-wrapper">
          <SearchTodoForm
            handleSearchClick={props.handleSearch}
            handleKeyChange={props.setSearchKeywords}
            handleTagClick={props.setSearchTags}
            availableTags={props.availableTags}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
