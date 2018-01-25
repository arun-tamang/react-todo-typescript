import * as React from 'react';
import Todo from './TodoItem';
import TodoList from '../domains/TodoList';

// import SERVICES from '../services';

export interface TodoListProps {
  todoList: TodoList;
  userId: number;
  handleDelete(): any;
  handleEdit(): any;
}

const TodoList = (props: TodoListProps) => {
  return (
    <div>
      <div className="container">
        <div className="todos-container">
          <h2 className="todo-header">{props.todoList.title}</h2>
          <ul className="todo-list">
            {props.todoList.todoProps.map((item, i) => (
              <Todo
                key={item.id}
                id={item.id}
                title={item.title}
                tags={item.tags}
                handleDelete={props.handleDelete}
                handleEdit={props.handleEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
