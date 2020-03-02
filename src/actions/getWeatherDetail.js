import { makeActionCreator } from '../utility';
export const GET_WEATHER_DETAIL = 'GET_WEATHER_DETAIL';
export const getWeatherDetail = makeActionCreator(GET_WEATHER_DETAIL,'city');
