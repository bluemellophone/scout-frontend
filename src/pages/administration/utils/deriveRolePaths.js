import roleSchema from '../constants/roleSchema';

const admin = roleSchema.find(o => o.payload.includes('is_admin'));
const dataManager = roleSchema.find(o =>
  o.payload.includes('is_data_manager'),
);

function getRoleOperations(adminBool, dataManagerBool) {
  return [
    {
      path: '/is_admin',
      value: adminBool,
    },
    {
      path: '/is_data_manager',
      value: dataManagerBool,
    },
  ];
}

export default function deriveRolePaths(roleLabel) {
  if (roleLabel === admin.label) {
    return getRoleOperations(true, true);
  } else if (roleLabel === dataManager.label) {
    return getRoleOperations(true, false);
  } else {
    return getRoleOperations(false, false);
  }
}
