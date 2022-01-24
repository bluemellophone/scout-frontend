import axios from 'axios';
import { useMutation } from 'react-query';

export default function usePostMission() {
  const mutation = useMutation(async title => {
    const result = await axios.request({
      url: `${__houston_url__}/api/v1/missions/`,
      withCredentials: true,
      method: 'post',
      data: { title },
    });
    if (result?.status === 200) {
      const newMissionGuid = result?.data?.guid;
      window.location.href = `/projects/${newMissionGuid}`;
    }
    return result;
  });

  const postMission = title => mutation.mutateAsync(title);

  const error = mutation?.error
    ? mutation?.error.toJSON().message
    : null;

  return {
    ...mutation,
    postMission,
    error,
  };
}
