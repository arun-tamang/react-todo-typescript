import RegisterDetails from '../domains/RegisterDetails';
import { RegisterActions } from '../domains/ActionTypes';
import TypeKeys from '../domains/TypeKeys';
import { initialRegisterDetails } from '../initialStoreStates';

const registerDetails = (state: RegisterDetails = initialRegisterDetails, action: RegisterActions) => {
  switch (action.type) {
    case TypeKeys.SET_REGISTER_F_NAME:
      return { ...state, firstName: action.payload.fName };
    case TypeKeys.SET_REGISTER_L_NAME:
      return { ...state, lastName: action.payload.lName };
    case TypeKeys.SET_REGISTER_EMAIL:
      return {...state, email: action.payload.email };
    case TypeKeys.SET_REGISTER_PASSWORD:
      return {...state, password: action.payload.password};
    case TypeKeys.RESET_STORE:
      return initialRegisterDetails;
    default:
      return state;
  }
};

export default registerDetails;
