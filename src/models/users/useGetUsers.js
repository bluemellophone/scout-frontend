import useGet from '../../hooks/useGet';
import queryKeys from '../../constants/queryKeys';

const limit = 20;
const offset = 0;

export default function useGetUsers() {
  return useGet({
    queryKey: queryKeys.users,
    url: '/users',
    data: {
      limit,
      offset,
    },
  });
}
