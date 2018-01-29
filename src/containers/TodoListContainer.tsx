import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/todoActionCreators';
import TodoList from '../components/TodoList';
import RootState from '../domains/RootState';
import TodoListContainerProps from '../domains/TodoListContainerProps';
import SERVICES from '../services/index';
import * as moment from 'moment';

class TodoListContainer extends React.Component<TodoListContainerProps, any> {
  constructor(props: TodoListContainerProps) {
    super(props);
    this.toggleAndSetEditTitle = this.toggleAndSetEditTitle.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleAndSetEditTitle(title: string) {
    this.props.togglePopUp();
    this.props.setPopUpEditTitle(title);
  }

  closePopUp(title: string) {
    let id = this.props.todoToEdit;
    SERVICES.editTodo(title, id, this.props.userId).then((response) => {
      let index = SERVICES.getTodoIndex(id, this.props.todos);
      this.props.editTodo(title, index);
    });
    this.toggleAndSetEditTitle(title);
  }

  handleAdd() {
    const EXPIRES_AT = String(moment());
    SERVICES.addTodo(this.props.userId, this.props.todoToAdd.title, this.props.todoToAdd.tagIds, EXPIRES_AT)
      .then((response) => {
        if (response) {
          let { id } = response.data;
          if (this.props.todos.length === this.props.metadata.pageSize) {
            this.props.fetchTodos(this.props.userId, this.props.metadata.page).catch((err) => {
              console.log(err);
            });
          } else {
            this.props.addTodo({
              id,
              title: this.props.todoToAdd.title,
              tags: this.props.todoToAdd.tagNames,
              expiresAt: EXPIRES_AT
            });
          }
          this.props.resetTodoToAdd();
        }
      })
      .catch((err) => console.log(err));
  }

  handleSearch() {
    this.props.searchTodos(this.props.searchValue, this.props.userId);
  }

  componentDidMount() {
    this.props.fetchTodos(this.props.userId, 1)
      .then(() => this.props.fetchTags(this.props.userId));
  }

  render() {
    return (
      <TodoList
        {...this.props}
        closePopUp={this.closePopUp}
        handleAdd={this.handleAdd}
        handleSearch={this.handleSearch}
      />
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    ...state.todoList,
    userId: state.user.userDetails.id
  };
}

function mapDispachToProps(dispatch: Dispatch<RootState>) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect<any, any, any, any>(mapStateToProps, mapDispachToProps)(TodoListContainer);
