import roleSchema from '../constants/roleSchema';

const admin = roleSchema.find(o => o.payload.includes('is_admin'));

function getRoleOperations(adminBool) {
  return [{ op: 'replace', path: '/is_admin', value: adminBool }];
}

export default function deriveRolePaths(roleLabel) {
  if (roleLabel === admin.label) {
    return getRoleOperations(true);
  } else {
    return getRoleOperations(false);
  }
}
