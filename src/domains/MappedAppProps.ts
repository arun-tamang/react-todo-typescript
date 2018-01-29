import LocalUser from './LocalUser';
import LogInDetails from './LogInDetails';

export default interface MappedAppProps {
  user: LocalUser;
  logInDetails: LogInDetails;
}