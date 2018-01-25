import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/appActionCreators';
import { fetchTodos } from '../actions/todoActionCreators';
import { fetchTags } from '../actions/todoActionCreators';
import App from '../components/App';
import RootState from '../domains/RootState';

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
    logInDetails: state.logInDetails,
  };
}

function mapDispachToProps(dispatch: Dispatch<RootState>) {
  return bindActionCreators({ ...actionCreators, fetchTodos, fetchTags }, dispatch);
}

const AppContainer = connect<any, any>(mapStateToProps, mapDispachToProps)(App);

export default AppContainer;
