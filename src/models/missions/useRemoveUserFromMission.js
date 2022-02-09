import axios from 'axios';
import { useMutation } from 'react-query';

export default function useRemoveUserFromMission() {
  const mutation = useMutation(async ({ missionId, userId }) => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/${missionId}`,
      withCredentials: true,
      method: 'patch',
      data: [
        {
          op: 'remove',
          path: '/user',
          value: userId,
        },
      ],
    });

    return result;
  });

  const removeUserFromMission = (missionId, userId) =>
    mutation.mutateAsync({ missionId, userId });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    removeUserFromMission,
    error,
  };
}
