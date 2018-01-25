import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/todoActionCreators';
import TodoList from '../components/TodoList';
import RootState from '../domains/RootState';

function mapStateToProps (state: RootState) {
  return {
    ...state.todoList,
    userId: state.user.userDetails.id
  };
}

function mapDispachToProps (dispatch: Dispatch<RootState>) {
  return bindActionCreators(actionCreators, dispatch);
}

const TodoListContainer = connect<any, any>(mapStateToProps, mapDispachToProps)(TodoList);

export default TodoListContainer;
