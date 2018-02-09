import * as appActions from '../../actions/appActionCreators';
import TypeKeys from '../../domains/TypeKeys';

describe('appActions', () => {
  it('should set tokens and userdetails', () => {
    const tokens = {
      accessToken: 'ACCESSTOKEN',
      refreshToken: 'REFRESHTOKEN'
    };
    const userDetails = {
      id: 1,
      createdAt: Date().toLocaleString(),
      email: 'test@test.com',
      firstName: 'test',
      lastName: 'test',
      password: 'test',
      updatedAt: Date().toLocaleString()
    };
    const expectedAction = {
      type: TypeKeys.RECEIVE_TOKENS_AND_USERDETAILS,
      payload: {
        tokens,
        userDetails
      }
    };
    const actualAction = appActions.receiveTokensAndUserDetails(tokens, userDetails);
    expect(actualAction).toEqual(expectedAction);
  });
});