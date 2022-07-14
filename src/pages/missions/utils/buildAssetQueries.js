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
              term: {
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
              term: {
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
          annotation_count: formatRange(annotationCountRange),
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

  if (queries.length === 0) return {};
  return { bool: { filter: queries } };
}
