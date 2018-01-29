import Tokens from './Tokens';
import FetchedUsrDetails from './FetchedUsrDetails';

export default interface LogInResponseData {
  tokens: Tokens;
  userInfo: FetchedUsrDetails;
}