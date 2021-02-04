// import { useContext } from 'react';
import axios from 'axios';
// import { StoreContext } from '../store/storeProvider';

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: `http://mushroomatlasapi.wachcio.pl/api/v1`,
  responseType: 'json',
});

export const getAllDataMushroom = () => {
  return API.get('/mushroom').then((res) => {
    return res.data;
  });
};
export const getOneDataMushroom = (mushroom) => {
  return API.get(`/mushroom/${mushroom}`).then((res) => {
    return res.data;
  });
};

export const getShortDataMushroom = async () => {
  return API.get('/mushroom/shortdata').then((res) => {
    // console.log(res);
    return res.data;
  });
};
