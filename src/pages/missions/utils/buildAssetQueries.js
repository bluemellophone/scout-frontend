export default function buildAssetQueries({ filename, tasks, tags }) {
  const filenameQuery = filename
    ? {
        query_string: {
          query: `*${filename}*`,
          fields: ['filename'],
        },
      }
    : null;

  const tasksQuery =
    tasks?.length > 0
      ? {
          bool: {
            should: tasks.map(taskGuid => ({
              match: { 'tasks.guid': taskGuid },
            })),
          },
        }
      : null;

  const tagsQuery =
    tags?.length > 0
      ? {
          bool: {
            should: tags.map(tagGuid => ({
              match: { 'tags.guid': tagGuid },
            })),
          },
        }
      : null;

  const queries = [filenameQuery, tasksQuery, tagsQuery].filter(
    f => f,
  );

  return { bool: { filter: queries } };
}
