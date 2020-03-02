import { makeActionCreator } from '../utility';
export const SET_WEATHER_DETAIL = 'SET_WEATHER_DETAIL';
export const setWeatherDetail = makeActionCreator(SET_WEATHER_DETAIL,'city');
