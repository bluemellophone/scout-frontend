import axios from 'axios';
import { useMutation } from 'react-query';

export default function usePatchMission() {
  const mutation = useMutation(async ({ missionId, operations }) => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/${missionId}`,
      withCredentials: true,
      method: 'patch',
      data: operations,
    });

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
