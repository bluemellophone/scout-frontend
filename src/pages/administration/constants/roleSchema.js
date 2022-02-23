export default [
  {
    label: 'Basic user',
    payload: [],
  },
  {
    label: 'Data manager',
    payload: ['is_data_manager'],
  },
  {
    label: 'Administrator',
    payload: ['is_admin', 'is_data_manager'],
  },
];
