import myAxios from '../../myAxios';
import SearchValue from '../../domains/SearchValue';
import { AxiosResponse } from 'axios';

export default  function searchTodos(searchInput: SearchValue, userId: number) {
  let myUrl = '/users/' + userId + '/todo/search';

  return myAxios
    .get(myUrl, {
      params: {
        keywords: searchInput.keywords,
        tags: searchInput.tags
      }
    })
    .then((response: AxiosResponse<any>) => {
      return response;
    })
    .catch((err: any) => console.log(err));
}
