import myAxios from '../../myAxios';
import { AxiosResponse } from 'axios';
import TagItem from '../../domains/TagItem';

export default  function fetchTags(userId: number): Promise<TagItem[]> {
  let myUrl = '/tags/' + userId;

  return myAxios
    .get(myUrl)
    .then(function(response: AxiosResponse<any>) {
      return response.data.data;
    })
    .catch(function(error: any) {
      console.log(error);
    });
}
