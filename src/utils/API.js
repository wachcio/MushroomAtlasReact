import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: 'http://mushroomatlasapi.wachcio.pl/api/v1',
  responseType: 'json',
});

export const getAllDataMushroom = () => {
  API.get('/mushroom').then((res) => {
    console.log(res);
  });
};

export const getShortDataMushroom = () => {
  API.get('/mushroom/shortdata').then((res) => {
    console.log(res);
  });
};
