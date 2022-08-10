import roleSchema from '../constants/roleSchema';

const admin = roleSchema.find(o => o.payload.includes('is_admin'));

const basicUser = roleSchema.find(o => o.payload.length === 0);

export default function deriveUserRole(user) {
  if (user?.is_admin) return admin;
  return basicUser;
}
