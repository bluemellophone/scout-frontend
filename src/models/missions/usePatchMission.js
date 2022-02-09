import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query';
import queryKeys, {
  getMissionQueryKey,
} from '../../constants/queryKeys';

export default function usePatchMission() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async ({ missionId, operations }) => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/${missionId}`,
      withCredentials: true,
      method: 'patch',
      data: operations,
    });

    if (result?.status === 200) {
      queryClient.invalidateQueries(getMissionQueryKey(missionId));
      queryClient.invalidateQueries(queryKeys.me);
    }

    return result;
  });

  const patchMission = (missionId, operations) =>
    mutation.mutateAsync({ missionId, operations });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    patchMission,
    error,
  };
}
