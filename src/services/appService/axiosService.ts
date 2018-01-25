import myAxios from '../../myAxios';

export function setTokenInHeader(acsToken: string) {
  myAxios.defaults.headers = {
    Authorization: acsToken
  };
}
