import myAxios from 'utils/myAxios';
import { useRequest } from 'ahooks';

function getCollections() {
  return myAxios.get('/api/pictures');
}

export default () => {
  const { data, err, loading } = useRequest(getCollections);
  return data;
};
