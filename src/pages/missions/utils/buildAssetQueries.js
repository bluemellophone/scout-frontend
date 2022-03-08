export default function buildAssetQueries({ filename, tasks, tags }) {
  return {
    query_string: {
      query: filename,
    },
  };
}
