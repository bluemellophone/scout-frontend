import roleSchema from '../constants/roleSchema';

const admin = roleSchema.find(o => o.payload.includes('is_admin'));
const dataManager = roleSchema.find(o =>
  o.payload.includes('is_data_manager'),
);

function getRoleOperations(adminBool, dataManagerBool) {
  return [
    { op: 'replace', path: '/is_admin', value: adminBool },
    {
      op: 'replace',
      path: '/is_data_manager',
      value: dataManagerBool,
    },
  ];
}

export default function deriveRolePaths(roleLabel) {
  if (roleLabel === admin.label) {
    return getRoleOperations(true, true);
  } else if (roleLabel === dataManager.label) {
    return getRoleOperations(false, true);
  } else {
    return getRoleOperations(false, false);
  }
}
