import {makeActionCreator} from '../utility';
import {API_STATUS} from './common';

export const setApiFetchingStatus = makeActionCreator(API_STATUS, 'label');
