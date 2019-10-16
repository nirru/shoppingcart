import { makeActionCreator } from '../utility';
export const DELETE_PLAN = 'DELETE_PLAN';
export const deletePlan = makeActionCreator(DELETE_PLAN,'id');