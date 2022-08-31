export default {
  me: 'me',
  myMissions: 'myMissions',
  settingsConfig: 'settingsConfig',
  settingsSchema: 'settingsSchema',
  users: 'users',
  collaborations: 'collaborations',
  assetGroupSightings: 'assetGroupSightings',
  keywords: 'keywords',
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

export function getMissionQueryKey(id) {
  return ['mission', id];
}

export function getAssetQueryKey(guid) {
  return ['asset', guid];
}

export function getMissionAssetsQueryKey(id, data, params) {
  return ['missionAssets', id, data, params];
}

export function getAllMissionAssetsQueryKeys(id) {
  return ['missionAssets', id];
}

export function getTaskQueryKey(id) {
  return ['task', id];
}
