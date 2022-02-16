import roleSchema from '../constants/roleSchema';

const admin = roleSchema.find(o => o.payload.includes('is_admin'));
const dataManager = roleSchema.find(o =>
  o.payload.includes('is_data_manager'),
);
const basicUser = roleSchema.find(o => o.payload.length === 0);

export default function deriveUserRole(user) {
  if (user?.is_admin) return admin;
  if (user?.is_data_manager) return dataManager;
  return basicUser;
}
