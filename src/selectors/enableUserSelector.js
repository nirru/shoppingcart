import { createSelector } from 'reselect';
export const usersSelector = createSelector(
  state=>state.get('userList'),
  userList=> {
    console.log(userList.get('data'));
    return userList;
  }
);

export const userSelector = (id) =>(isActive)=> (state) => {
  // console.log(id);
  const entry = usersSelector(state).get('data').map(user => {
    console.log(user.get('id')===1);
    return user.get('id') === 1 ? user.set('is_account_active', 1) : user;
  });
  if (entry) {
    console.log(entry.toJS());
    return entry;
  } else {
    return null;
  }
};