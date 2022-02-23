import React from 'react';

import { formatDate } from '../../utils/formatters';
import BodyHeader from '../../components/BodyHeader';
import Text from '../../components/Text';
import GlobalActionsMenu from '../../components/GlobalActionsMenu';

export default function TaskDashboard({ userData }) {
  const createdDate = formatDate(userData?.created, true);
  const tasks = userData?.owned_mission_tasks || [];

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
        {tasks.length === 0 ? (
          <div style={{ marginTop: 40 }}>
            <Text style={{ marginBottom: 12 }}>
              You have no tasks. Check with your administrator.
            </Text>
          </div>
        ) : (
          <div>Wow look at all these tasks!</div>
        )}
      </div>
    </div>
  );
}
