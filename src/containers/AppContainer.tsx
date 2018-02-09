import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/appActionCreators';
import { fetchTodos } from '../actions/todoActionCreators';
import { fetchTags } from '../actions/todoActionCreators';
import App from '../components/App';
import RootState from '../domains/RootState';
import MappedAppProps from '../domains/MappedAppProps';
// import MappedAppActions from '../domains/MappedAppActions';

function mapStateToProps(state: RootState) {
  return {
    logInDetails: state.logInDetails,
    registerDetails: state.registerDetails,
    user: state.user    
  };
}

function mapDispachToProps(dispatch: Dispatch<RootState>) {
  return bindActionCreators({ ...actionCreators, fetchTodos, fetchTags }, dispatch);
}

const AppContainer = connect<MappedAppProps, any, any, RootState>(mapStateToProps, mapDispachToProps)(App);

export default AppContainer;
