export default {
  me: 'me',
  myMissions: 'myMissions',
  settingsConfig: 'settingsConfig',
  settingsSchema: 'settingsSchema',
  users: 'users',
  collaborations: 'collaborations',
  assetGroupSightings: 'assetGroupSightings',
};

export function getAuditLogQueryKey(id) {
  return ['auditLog', id];
}

export function getSightingQueryKey(id) {
  return ['sighting', id];
}

export function getAGSQueryKey(id) {
  return ['assetGroupSighting', id];
}
