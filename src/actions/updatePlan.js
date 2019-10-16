import { makeActionCreator } from '../utility';
export const UPDATE_PLAN = 'UPDATE_PLAN';
export const updatePlan = makeActionCreator(UPDATE_PLAN,'id');