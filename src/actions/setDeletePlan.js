import { makeActionCreator } from '../utility';
export const SET_DELETE_PLAN = 'SET_DELETE_PLAN';
export const setDeletePlan = makeActionCreator(SET_DELETE_PLAN,'id');