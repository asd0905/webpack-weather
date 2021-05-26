import axios from "axios";

const API_KEY = '1789c77dd563f3737155d4f15db0b8c0';
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY }`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},kr`;
    const request = axios.get(url);
    console.log('action', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
    // 만약 페이로드가 프로미스면, 리덕스 프로미스는 액션 전체를 멈춤
    // 프로미스가 풀어지면 다시 재가동
    // 비동기적 코딩할때처럼 코드가 길어질 필요가 없다
}
