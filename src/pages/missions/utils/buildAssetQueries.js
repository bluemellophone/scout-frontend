import { isEmpty } from 'lodash-es';

function formatRange(range) {
  if (range?.eq) {
    return {
      lte: range.eq,
      gte: range.eq,
    };
  }
  return range;
}

export default function buildAssetQueries({
  filename,
  tasks,
  tags,
  annotationCountRange,
  createdRange,
  updatedRange,
}) {
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
              match: {
                'tasks.guid': taskGuid,
              },
            })),
          },
        }
      : null;

  const tagsQuery =
    tags?.length > 0
      ? {
          bool: {
            should: tags.map(tagGuid => ({
              match: {
                'tags.guid': tagGuid,
              },
            })),
          },
        }
      : null;

  const annotationCountQuery = !isEmpty(annotationCountRange)
    ? {
        range: {
          // 'annotation_count': annotationCountRange,
          size_bytes: formatRange(annotationCountRange),
        },
      }
    : null;

  const createdRangeQuery = !isEmpty(createdRange)
    ? { range: { created: createdRange } }
    : null;

  const updatedRangeQuery = !isEmpty(updatedRange)
    ? { range: { updated: updatedRange } }
    : null;

  const queries = [
    filenameQuery,
    tasksQuery,
    tagsQuery,
    annotationCountQuery,
    createdRangeQuery,
    updatedRangeQuery,
  ].filter(f => f);

  return { bool: { filter: queries } };
}
