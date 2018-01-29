import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import deleteTodo from '../services/todoListServices/deleteTodo';
import getTodoIndex from '../services/todoListServices/getTodoIndex';
import {
  fetchTodos,
  removeTodo,
  setPopUpEditTitle,
  setTodoToEdit,
  togglePopUp
} from '../actions/todoActionCreators';
import TodoItem from '../components/TodoItem';
import RootState from '../domains/RootState';
import TodoItemContainerProps from '../domains/TodoItemContainerProps';
// import MappedTodoProps from '../domains/MappedTodoProps';
import MappedTodoActions from '../domains/MappedTodoActions';

const TodoItemContainer = (props: TodoItemContainerProps) => {
  const buttonStyle = {
    margin: '10px 10px 10px 0',
    padding: '5px 0'
  };

  const toggleAndSetTitle = (title: string) => {
    props.togglePopUp();
    props.setPopUpEditTitle(title);
  };

  const handleEditClick = () => {
    toggleAndSetTitle(props.title);
    props.setTodoToEdit(props.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(props.userId, props.id)
      .then((response) => {
        let index = getTodoIndex(props.id, props.todos);
        if (props.todos.length === props.metadata.pageSize) {
          props.fetchTodos(props.userId, props.metadata.page);
        } else {
          props.removeTodo(index);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <TodoItem
      id={props.id}
      title={props.title}
      tags={props.tags}
      buttonStyle={buttonStyle}
      handleEdit={handleEditClick}
      handleDelete={handleDeleteClick}
    />
  );
};

const todoActions = {
  fetchTodos,
  removeTodo,
  setPopUpEditTitle,
  setTodoToEdit,
  togglePopUp
};

const mapStateToProps = (state: RootState) => {
  return {
    metadata: state.todoList.metadata,
    todos: state.todoList.todos,
    userId: state.user.userDetails.id
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
  return bindActionCreators(todoActions, dispatch);
};

export default 
connect<any,
MappedTodoActions, any, RootState>(mapStateToProps, mapDispatchToProps)(TodoItemContainer);