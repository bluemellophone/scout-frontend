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
    label: 'Administration',
    payload: ['is_admin', 'is_data_manager'],
  },
];
