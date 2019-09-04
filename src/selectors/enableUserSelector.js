import { createSelector } from 'reselect';
export const usersSelector = createSelector(
  state=>state.get('userList'),
  userList=>userList
);

export const userSelector = (id,isActive) => (state) => {
  const entry = usersSelector(state).map(user => {
    console.log(user);
    return user.get('id') === id ? user.set('is_account_active', isActive) : user;
  });
  if (entry) {
    console.log('aaaaaaaa');
    return entry;
  } else {
    console.log('bbbbbbbbbbb');
    return state.get('userList');
  }
};