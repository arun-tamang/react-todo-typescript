import LocalUserDetails from './LocalUserDetails';

export default interface LocalUser {
  authenticated: boolean;
  userDetails: LocalUserDetails;
}