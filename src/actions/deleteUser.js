import { makeActionCreator } from '../utility';
export const DELETE_USER = 'DELETE_USER';
export const deleteUser = makeActionCreator(DELETE_USER,'id');