import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { formatDate } from '../../utils/formatters';
import BodyHeader from '../../components/BodyHeader';
import Link from '../../components/Link';
import Text from '../../components/Text';
import GlobalActionsMenu from '../../components/GlobalActionsMenu';

export default function TaskDashboard({ userData })
{
  const createdDate = formatDate(userData?.created, true);
  const tasks = userData?.assigned_mission_tasks || [];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          padding: '20px 16px 40px 40px',
          overflow: 'scroll',
          maxHeight: 'calc(100vh - 12px)',
        }}
      >
        <BodyHeader
          title={`Welcome back, ${userData?.full_name}`}
          subtitle={`User since ${createdDate}`}
          MenuComponent={GlobalActionsMenu}
        />
        <Text variant="h5" style={{ margin: '20px 0 12px 0' }}>Assigned tasks</Text>
        {tasks.length === 0 ? (
          <Text>
            No tasks have been assigned to you.
          </Text>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>{tasks.map(task => <Link href={`/tasks/${task?.guid}`} noUnderline style={{ padding: '0 12px 12px 0' }}>
            <Card style={{ width: 320 }}>
              <CardContent>
                <Text>{task?.title}</Text>
                <Text variant="body2">{`Created ${formatDate(task?.created, true)}`}</Text>
              </CardContent>
            </Card></Link>)}</div>
        )}
      </div>
    </div>
  );
}
