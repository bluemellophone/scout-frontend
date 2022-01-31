import axios from 'axios';
import { useMutation } from 'react-query';

export default function usePostMissionCollection() {
  const mutation = useMutation(
    async ({ missionId, transactionId }) => {
      const result = await axios.request({
        url: `${__houston_url__}/api/v1/missions/${missionId}/tus/collect/`,
        withCredentials: true,
        method: 'post',
        data: {
          description: 'MWS mission image upload',
          transaction_id: transactionId,
        },
      });

      return result;
    },
  );

  const postMissionCollection = (missionId, transactionId) =>
    mutation.mutateAsync({ missionId, transactionId });

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    postMissionCollection,
    error,
  };
}
