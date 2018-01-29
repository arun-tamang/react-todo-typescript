import Tokens from './Tokens';
import FetchedUsrDetails from './FetchedUsrDetails';

export default interface LoginActionReturn {
  tokens: Tokens;
  userDetails: FetchedUsrDetails;
}